package team.nine.Exams.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import team.nine.Exams.exceptions.EmailAlreadyTakenException;
import team.nine.Exams.exceptions.UserTokenNotFoundException;
import team.nine.Exams.exceptions.UsernameAlreadyTakenException;
import team.nine.Exams.models.User;
import team.nine.Exams.models.auth.AuthRequest;
import team.nine.Exams.repositories.UserRepository;
import team.nine.Exams.services.JwtUtil;
import team.nine.Exams.services.MyUserDetailService;
import team.nine.Exams.services.UserService;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private MyUserDetailService myUserDetailService;

    @Autowired
    private JwtUtil jwtUtil;

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private AuthenticationManager authenticationManager;


    @GetMapping("/users")
    public List<User> getUsers(){
        logger.info("Get all users request");
        return userRepository.findAll();
    }

    @GetMapping("/users/{name}")
    public User getUser(@PathVariable("name") String name){
        logger.info("Get user by name: {} request",name);

        return userRepository.findUserName(name)
                .orElseThrow(() ->{
                    logger.error("User with name: {} not found",name);
                    return new ResponseStatusException(
                            HttpStatus.NOT_FOUND,
                            String.format("User with name: %s not found",name)
                    );
                });
    }


    @PostMapping("/users/register")
    public Optional<User> registerUser(@RequestBody User user){
        logger.info("Registering new user request {}",user.toString());

        try {
            userService.registerUser(
                    user.getUserName(),
                    user.getPassword(),
                    user.getEmail()
            );
        }
        catch (EmailAlreadyTakenException exception){
            logger.error("User Email {} already exists", user.getEmail());
            throw new ResponseStatusException(HttpStatus.FOUND, "User email found", exception);
        }
        catch (UsernameAlreadyTakenException exception){
            logger.error("Username {} already exists", user.getUserName());
            throw new ResponseStatusException(HttpStatus.FOUND, "Username found", exception);
        }
        return userRepository.findUserName(user.getUserName());
    }




    @PostMapping("/users/authenticate")
    public User authenticateUser(@RequestBody AuthRequest authRequest) throws Exception{
        logger.info("Auth request initialized");

        try{
            logger.info("Trying incoming data: {} {}",authRequest.getUserName(),authRequest.getPassword());
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authRequest.getUserName(),
                            authRequest.getPassword()
                    )
            );
        }catch (Exception exception){
            logger.error("Invalid username or password");
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid username or password",exception);
        }

        String token = jwtUtil.generateToken(authRequest.getUserName());
        userService.assignToken(authRequest.getUserName(), token);
        return userService.findByToken(token);
    }



    // Updating user
    @PutMapping("/users/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable(name="id") Long id) {
        logger.info("Updating user request {}",newUser.toString());
        return userRepository.findById(id)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setPassword(newUser.getPassword());
                    user.setEmail(newUser.getEmail());
                    user.setRole(newUser.getRole());
                    return userRepository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setUid(id);
                    return userRepository.save(newUser);
                });
    }

    @DeleteMapping("/users/logout")
    public User logoutUser(@RequestHeader(value = "Authorization") String token){
        logger.info("Logout User");
        String t = token.substring(7);

        User user = userService.findByToken(t);

        try{
            userService.deleteUserToken(t);
            logger.info("Token deleted successfully");
        }
        catch (UserTokenNotFoundException e){
            logger.error(String.format("Token %s not found", t));
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Token not found", e);
        }
        return new User(
                user.getUid(),
                user.getUserName(),
                user.getPassword(),
                user.getEmail(),
                user.getRole(),
                null
        );
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable(name="id") Long id){
        logger.info("Deleting user request {}",userRepository.findById(id).toString());
        userRepository.deleteById(id);
    }
}

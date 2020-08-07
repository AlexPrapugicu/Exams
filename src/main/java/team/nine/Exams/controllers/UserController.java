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
    public Optional<User> authenticateUser(@RequestBody AuthRequest authRequest) throws Exception{
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


//        final UserDetails userDetails = myUserDetailService.loadUserByUsername(authRequest.getUserName());
//        final String jwt = jwtUtil.generateToken(userDetails.getUsername());
//
//        return ResponseEntity.ok(new AuthResponse(jwt));
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

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable(name="id") Long id){
        logger.info("Deleting user request {}",userRepository.findById(id).toString());
        userRepository.deleteById(id);
    }
}

package team.nine.Exams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.nine.Exams.exceptions.EmailAlreadyTakenException;
import team.nine.Exams.exceptions.UsernameAlreadyTakenException;
import team.nine.Exams.models.User;
import team.nine.Exams.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(String username, String password, String email){
        boolean usernameAlreadyTaken = userRepository.existsByUserName(username);
        boolean emailAlreadyTaken = userRepository.existsByEmail(email);

        if(!usernameAlreadyTaken){
            if(!emailAlreadyTaken){
                User newUser = new User();
                newUser.setUserName(username);
                newUser.setEmail(email);
                newUser.setPassword(password);
                newUser.setRole("student");
                userRepository.save(newUser);
            }
            else {
                throw new EmailAlreadyTakenException("Email taken");
            }
        }
        else{
            throw new UsernameAlreadyTakenException("User Taken");
        }
    }

    public void assignToken(String username, String token){
        User user;
        if (userRepository.findUserName(username).isPresent()){
            user = userRepository.findUserName(username).get();
            user.setToken(token);
            userRepository.save(user);
        }
    }

    public Optional<User> findByToken(String token){
        return userRepository.findByToken(token);
    }
}

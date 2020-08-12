package team.nine.Exams.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import team.nine.Exams.exceptions.EmailAlreadyTakenException;
import team.nine.Exams.exceptions.UserTokenNotFoundException;
import team.nine.Exams.exceptions.UsernameAlreadyTakenException;
import team.nine.Exams.models.Token;
import team.nine.Exams.models.User;
import team.nine.Exams.repositories.TokenRepository;
import team.nine.Exams.repositories.UserRepository;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenRepository tokenRepository;

//    @Autowired
//    private UserExamsRepository userExamsRepository;


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
            Token t = new Token();
            t.setToken(token);
            List<Token> tokenList = user.getToken();
            tokenList.add(t);
            userRepository.save(user);
        }
    }

    public void deleteUserToken(String token){
        Token t = tokenRepository.findByToken(token);
        try{
            tokenRepository.deleteByTid(t.getTid());
        }
        catch (Exception e) {
            throw new UserTokenNotFoundException(String.format("Token %s not found", token));
        }
    }

    public User findByToken(String token){
        Token t = tokenRepository.findByToken(token);
        return userRepository.findByToken(t);
    }

    public void unauthorizedUser(String token) {
        if (!tokenRepository.existsByToken(token)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid auth token");
        }
    }



//    public List<Exam> getMyExams(String username){
//        User user = userRepository.findUserName(username).get();
//
//        // Here we get UserExams based on one id
//        List<UserExams> myExams = userExamsRepository.findByUser(user);
//
//        List<Exam> examsList =  myExams
//                .stream()
//                .map(UserExams::getExam)
//                .collect(Collectors.toList());
//
//        return examsList;
//    }
}

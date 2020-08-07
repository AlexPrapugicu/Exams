//package team.nine.Exams.database;
//
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import team.nine.Exams.models.User;
//import team.nine.Exams.repositories.UserRepository;
//
//import java.util.Arrays;
//import java.util.List;
//
//public class LoadUser implements CommandLineRunner {
//    private UserRepository userRepository;
//    private PasswordEncoder passwordEncoder;
//
//    public LoadUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    @Override
//    public void run(String... args) {
//        // Delete all
//        this.userRepository.deleteAll();
//
//        // Create users - in memory used for test with postman
//        User student= new User("student",passwordEncoder.encode("student123"),"student@gmail.com","student","");
//        User teacher = new User("teacher",passwordEncoder.encode("teacher123"),"teacher@gmail.com","teacher","");
//
//        List<User> users = Arrays.asList(student,teacher);
//
//        // Save to db
//        this.userRepository.saveAll(users);
//    }
//
//}

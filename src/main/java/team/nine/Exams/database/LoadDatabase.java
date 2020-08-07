//package team.nine.Exams.database;
//
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import team.nine.Exams.models.Exam;
//import team.nine.Exams.repositories.ExamRepository;
//
//@Configuration
//@Slf4j// creates a self-based logger
//public class LoadDatabase {
//   @Bean
//
//        //test data to check if the methods created in the controller class are working
//        //use postman to check them
//    CommandLineRunner initDatabase (ExamRepository repository){
//        return args -> {
//            log.info("Preloading " + repository.save(new Exam((long) 2020, "Iarna P1", 1, "AC", "CTI", "LSD", "Minea", 150)));
//            log.info("Preloading " + repository.save(new Exam((long) 2020, "Vara P2", 2, "AC", "ISE", "TS1", "Robu", 200)));
//        };
//
//    }
//
//}

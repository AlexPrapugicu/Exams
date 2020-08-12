//package team.nine.Exams.repositories;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import team.nine.Exams.models.Exam;
//import team.nine.Exams.models.User;
//import team.nine.Exams.models.UserExams;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface UserExamsRepository extends JpaRepository<UserExams, Long>{
//
//    // Here the string exam refers to the exam course name. Ambiguity shall be solved soon.
//    // But for the sake of functionality this will be considered as the course name
//
//    @Query(value = "SELECT u FROM UserExams u WHERE u.exam = ?1")
//    UserExams findByExam(Exam exam);
//
//    @Query(value = "SELECT u FROM UserExams u WHERE u.user = ?1")
//    List<UserExams> findByUser(Optional<User> user);
//
//
//}

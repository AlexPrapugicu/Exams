package team.nine.Exams.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import team.nine.Exams.models.Exam;

import java.util.List;

public interface ExamRepository  extends JpaRepository<Exam,Long> {
    List<Exam> findByYearOfStudy(int yearOfStudy);
    List<Exam> findByFaculty(String faculty);
    Exam findByCourse(String course);


    boolean existsByCourse(String course);

}

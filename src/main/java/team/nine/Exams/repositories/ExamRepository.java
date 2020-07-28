package team.nine.Exams.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import team.nine.Exams.models.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}

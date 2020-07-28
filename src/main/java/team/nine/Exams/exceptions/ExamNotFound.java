package team.nine.Exams.exceptions;

public class ExamNotFound extends RuntimeException {
    public ExamNotFound(Long id){
        super("Could not find exam with id: " + id);
    }
}

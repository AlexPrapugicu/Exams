package team.nine.Exams.exceptions;

public class EmailAlreadyTakenException extends RuntimeException{
    public EmailAlreadyTakenException(String ErrorMessage){
        super(ErrorMessage);
    }
}

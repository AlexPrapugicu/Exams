package team.nine.Exams.exceptions;

public class UsernameAlreadyTakenException extends RuntimeException{
    public UsernameAlreadyTakenException(String ErrorMessage){
        super(ErrorMessage);
    }
}

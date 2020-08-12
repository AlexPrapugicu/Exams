//package team.nine.Exams.services;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import team.nine.Exams.models.Exam;
//import team.nine.Exams.models.User;
//import team.nine.Exams.models.UserExams;
//import team.nine.Exams.repositories.ExamRepository;
//import team.nine.Exams.repositories.UserExamsRepository;
//import team.nine.Exams.repositories.UserRepository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class ExamService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private ExamRepository examRepository;
//
//    @Autowired
//    private UserExamsRepository userExamsRepository;
//
//
//    public void addNewExam(String course,
//                              String domain,
//                              String session,
//                              String teacher,
//                              int yearOfStudy,
//                              String faculty){
//        boolean ExamAlreadyAdded = examRepository.existsByCourse(course);
//
//        if(!ExamAlreadyAdded){
//            Exam newExam = new Exam();
//            newExam.setCourse(course);
//            newExam.setDomain(domain);
//            newExam.setYearOfStudy(yearOfStudy);
//            newExam.setFaculty(faculty);
//            newExam.setTeacher(teacher);
//            newExam.setSession(session);
//            examRepository.save(newExam);
//        }
//        else {
////            throw new ExamAlreadyAddedException("Exam Already Added");
//        }
//    }
//
//    public void assignExamToStudent(String username,String course){
//        User user;
//        Exam exam;
//        if(userRepository.findUserName(username).isPresent()){
//            user = userRepository.findUserName(username).get();
//
//            if(examRepository.existsByCourse(course)){
//                exam = examRepository.findByCourse(course);
//
//                UserExams userExams = new UserExams();
//                userExams.setExam(exam);
//                userExams.setUser(user);
//                userExams.setDateRegistered(LocalDateTime.now());
//                userExams.setGrade(0);
//
//                List<UserExams> ue = user.getUserExams();
//                List<UserExams> eu = exam.getUserExams();
//                eu.add(userExams);
//                ue.add(userExams);
//                examRepository.save(exam);
//                userRepository.save(user);
//            }
//        }
//    }
//
//    public List<UserExams> getExamsForUser(String username){
//        Optional<User> user = userRepository.findUserName(username);
//        return userExamsRepository.findByUser(user);
//    }
//
//    public void deleteExamFromUser(String course, String username){
//        UserExams ex = userExamsRepository.findByExam(examRepository.findByCourse(course));
//
//        try{
//            userExamsRepository.deleteById(ex.getId());
//        }
//        catch (Exception e){
//
//        }
//    }
//}

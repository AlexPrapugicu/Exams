package team.nine.Exams.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import team.nine.Exams.exceptions.ExamNotFound;
import team.nine.Exams.models.Exam;
import team.nine.Exams.repositories.ExamRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ExamController {

    @Autowired
    private ExamRepository examRepository;

//    @Autowired
//    private ExamService examService;
//
//    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
//
//
//    @GetMapping("/exams/special/{name}")
//    public List<UserExams> getAllSpecial(@PathVariable("name") String name){
//        return examService.getExamsForUser(name);
//    }
//
//    @PostMapping("exams/special/add/{name}")
//    public void addUserExam(@PathVariable("name") String name, @RequestBody String exam){
//        try{
//            logger.info("Posting {} and {}",name,exam);
//            examService.assignExamToStudent(name,exam);
//        }
//        catch (Exception e){
//            logger.info("error {}",e);
//        }
//    }

    //findAll method
    @GetMapping("/exams")
    public List<Exam> getAll(){
        return examRepository.findAll();
    }

    //new exam method
    @PostMapping("/exams")
    public Exam newExam(@RequestBody Exam newExam){
        return examRepository.save(newExam);
    }

    // test filter and exception using the id of an exam
    @GetMapping("/exams/{id}")
    Exam one(@PathVariable Long id) {

        return examRepository.findById(id)
                .orElseThrow(() -> new ExamNotFound(id));
    }

    @GetMapping("/exams/year/{yearOfStudy}")
    List<Exam> findStudyYear(@PathVariable int yearOfStudy){
        return examRepository.findByYearOfStudy(yearOfStudy);
    }
    @GetMapping("exams/faculty/{faculty}")
    List<Exam> findFaculty(@PathVariable String faculty){
        return examRepository.findByFaculty(faculty);
    }





    //updating an exam using the id
    @PutMapping("/exams/{id}")
    public Exam replaceExam(@RequestBody Exam newExam, @PathVariable Long id) {

        return examRepository.findById(id)
                .map(exam -> {
                    exam.setSession(newExam.getSession());
                    exam.setYearOfStudy(newExam.getYearOfStudy());
                    exam.setFaculty(newExam.getFaculty());
                    exam.setDomain(newExam.getDomain());
                    exam.setCourse(newExam.getCourse());
                    exam.setTeacher(newExam.getTeacher());
                    return examRepository.save(exam);
                })
                .orElseGet(() -> {
                    newExam.setId(id);
                    return examRepository.save(newExam);
                });
    }
    //removing an exam by id
    @DeleteMapping("/exams/{id}")
    public void deleteExam(@PathVariable Long id) {
        examRepository.deleteById(id);
    }
}

//package team.nine.Exams.models;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import javax.persistence.*;
//import java.io.Serializable;
//import java.time.LocalDateTime;
//
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Entity
//@Table(name = "user_exams_table")
//public class UserExams implements Serializable{
//
//    @Id
//    @Column(name = "id")
//    @GeneratedValue
//    private long id;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    @ManyToOne
//    @JoinColumn(name = "exam_id")
//    private Exam exam;
//
//    @Column(name = "register_date")
//    private LocalDateTime dateRegistered;
//
//    @Column(name = "grade")
//    private int grade;
//}

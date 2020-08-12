package team.nine.Exams.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "exams_table")
public class Exam {

    @Id
    @GeneratedValue
    @Column(name= "exams_id")
    private Long id;

    @Column(name= "session")
    private String session;
    @Column(name= "yearOfStudy")
    private int yearOfStudy;
    @Column(name= "faculty")
    private String faculty;
    @Column(name= "domain")
    private String domain;
    @Column(name= "course")
    private String course;
    @Column(name= "teacher")
    private String teacher;

//    @ManyToMany(targetEntity = UserExams.class, mappedBy = "exam", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    @ElementCollection(targetClass = UserExams.class)
//    private List<UserExams> userExams;

}

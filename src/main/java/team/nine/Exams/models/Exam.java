package team.nine.Exams.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "exam_table")
public class Exam {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "academicYear")
    private int academicYear;

    @Column(name = "session")
    private String session;

    @Column(name = "yearOfStudy")
    private int yearOfStudy;

    @Column(name = "faculty")
    private String faculty;

    @Column(name = "domain")
    private String domain;

    @Column(name = "course")
    private String course;

    @Column(name = "teacher")
    private String teacher;

    @Column(name = "numberOfSeats")
    private int numberOfSeats;

}

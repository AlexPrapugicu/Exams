package team.nine.Exams.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user_table")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "uid")
    private Long uid;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "role")
    private String role;

    @OneToMany(targetEntity = Token.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "uid_tk", referencedColumnName = "uid")
    private List<Token> token;


////     Each User gets a list of exams he/she has enrolled to.
//    @OneToMany(targetEntity = UserExams.class, mappedBy = "user", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    @ElementCollection(targetClass = UserExams.class)
//    private List<UserExams> userExams;
}

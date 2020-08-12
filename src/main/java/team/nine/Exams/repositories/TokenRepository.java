package team.nine.Exams.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import team.nine.Exams.models.Token;

public interface TokenRepository extends JpaRepository<Token,Long> {
    Token findByToken(String token);

    @Transactional
    @Modifying
    void deleteByTid(int tid);

    boolean existsByToken(String token);
}

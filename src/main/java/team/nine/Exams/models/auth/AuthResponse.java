package team.nine.Exams.models.auth;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class AuthResponse {
    private final String jwt;

    public String getJwt() {
        return jwt;
    }
}

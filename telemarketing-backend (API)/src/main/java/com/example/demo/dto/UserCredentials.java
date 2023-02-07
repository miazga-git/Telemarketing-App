package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Setter
@Getter
@NoArgsConstructor
public class UserCredentials {

    @Size(min = 8, max = 32)
    @NotBlank(message = "Password cannot be blank")
    private String password;

    @NotBlank(message = "Username cannot be blank")
    @Column(unique = true)
    private String username;

    public UserCredentials(String password, String username) {
        this.password = password;
        this.username = username;
    }
}

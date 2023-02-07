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
public class UserRegisterDto {

    private String password;

    private String firstName;

    private String surname;

    private String username;

    public UserRegisterDto(String password, String firstName, String surname, String username) {
        this.password = password;
        this.firstName = firstName;
        this.surname = surname;
        this.username = username;
    }

}

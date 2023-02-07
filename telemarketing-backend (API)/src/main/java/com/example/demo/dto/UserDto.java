package com.example.demo.dto;

import com.example.demo.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String firstName;
    private String surname;
    private String username;

    public UserDto(User user) {
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.surname = user.getSurname();
        this.username = user.getUsername();
    }
}

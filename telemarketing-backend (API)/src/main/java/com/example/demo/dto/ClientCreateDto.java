package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Setter
@Getter
@NoArgsConstructor
public class ClientCreateDto {
    @NotNull(message = "Name cannot be blank")
    private String name;

    @NotNull(message = "Surname cannot be blank")
    private String surname;

    @NotNull(message = "Telephone Number cannot be blank")
    private String telephoneNumber;

    @NotNull(message = "Email cannot be blank")
    private String email;

    @NotNull(message = "State cannot be blank")
    private String state;

    @NotNull(message = "Street cannot be blank")
    private String street;

    @NotNull(message = "City cannot be blank")
    private String city;

    @NotNull(message = "Zip cannot be blank")
    private String zip;

    private Integer numberOfChildren;

    private Integer age;

    private String job;

    public ClientCreateDto(String name, String surname, String telephoneNumber, String email, String state,
                  String street, String city, String zip,Integer numberOfChildren, Integer age, String job){
        this.name=name;
        this.surname=surname;
        this.telephoneNumber=telephoneNumber;
        this.email=email;
        this.state=state;
        this.street=street;
        this.city=city;
        this.zip=zip;
        this.numberOfChildren=numberOfChildren;
        this.age=age;
        this.job=job;
    }
}

package com.example.demo.entity;

import com.example.demo.dto.ClientCreateDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Setter
@Getter
@Entity
@NoArgsConstructor
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    public Client(@NotNull(message = "Name cannot be blank") String name, @NotNull(message = "Surname cannot be blank") String surname, @NotNull(message = "Telephone Number cannot be blank") String telephoneNumber, @NotNull(message = "Email cannot be blank") String email, @NotNull(message = "State cannot be blank") String state, @NotNull(message = "Street cannot be blank") String street, @NotNull(message = "City cannot be blank") String city, @NotNull(message = "Zip cannot be blank") String zip, Integer numberOfChildren, Integer age, String job) {
        this.name = name;
        this.surname = surname;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.state = state;
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.numberOfChildren = numberOfChildren;
        this.age = age;
        this.job = job;
    }
    public Client(String name, String surname, String telephoneNumber, String email, String state, String street, String city, String zip){
        this.name=name;
        this.surname=surname;
        this.telephoneNumber=telephoneNumber;
        this.email=email;
        this.state=state;
        this.street=street;
        this.city=city;
        this.zip=zip;
    }
    public Client(ClientCreateDto clientCreateDto){
        this.name=clientCreateDto.getName();
        this.surname=clientCreateDto.getSurname();
        this.telephoneNumber=clientCreateDto.getTelephoneNumber();
        this.email=clientCreateDto.getEmail();
        this.state=clientCreateDto.getState();
        this.street=clientCreateDto.getStreet();
        this.city=clientCreateDto.getCity();
        this.zip=clientCreateDto.getZip();
        this.numberOfChildren=clientCreateDto.getNumberOfChildren();
        this.age=clientCreateDto.getAge();
        this.job=clientCreateDto.getJob();
    }


}

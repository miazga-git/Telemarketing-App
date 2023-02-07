package com.example.demo.dto;

import com.example.demo.entity.Client;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ClientDto {

    private Long id;
    private String name;
    private String surname;
    private String telephoneNumber;
    private String email;
    private String state;
    private String street;
    private String city;
    private String zip;

    private Integer numberOfChildren;
    private Integer age;
    private String job;

    public ClientDto(Client client){
        this.id = client.getId();
        this.name=client.getName();
        this.surname=client.getSurname();
        this.telephoneNumber=client.getTelephoneNumber();
        this.email=client.getEmail();
        this.state=client.getState();
        this.street=client.getStreet();
        this.city=client.getCity();
        this.zip=client.getZip();
        this.numberOfChildren=client.getNumberOfChildren();
        this.age=client.getAge();
        this.job=client.getJob();
    }
}

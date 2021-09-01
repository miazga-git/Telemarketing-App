package com.example.telemarketingapi.Classes;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private Integer telephoneNumber;
    private String email;
    private String state;
    private String street;
    private String city;
    private String zip;
    private Integer numberOfChildren;
    private Integer age;
    private String job;
    public Client(String name, String surname, Integer telephoneNumber, String email, String state, String street, String city, String zip){
        this.name=name;
        this.surname=surname;
        this.telephoneNumber=telephoneNumber;
        this.email=email;
        this.state=state;
        this.street=street;
        this.city=city;
        this.zip=zip;
    }
    public Client(String name, String surname, Integer telephoneNumber, String email, String state,
                  String street, String city, String zip,Integer numberOfChildren, Integer age, String job){//3 ostatnie wartosci klasy sa opcjonalne,stad dodatkowy konstruktor
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
    public Client(){//inaczej mi krzyczy ,ze klasa ma miec konstruktora bez argumentow, no tak bo sie ten domyslny wylacza

    }

}

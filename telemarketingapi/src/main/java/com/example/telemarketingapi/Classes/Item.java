package com.example.telemarketingapi.Classes;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data//nie trzeba getterów
@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double price;

    private String name;
    private String description;
    private String url;

    public Item(String name, String description, Double price, String url){
        this.name=name;
        this.description=description;
        this.price=price;
        this.url=url;

    }

    public Item() {

    }
}

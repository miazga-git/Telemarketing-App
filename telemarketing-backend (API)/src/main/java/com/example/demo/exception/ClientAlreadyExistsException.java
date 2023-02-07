package com.example.demo.exception;

public class ClientAlreadyExistsException extends RuntimeException {
    private String name, surname, email;

    public ClientAlreadyExistsException(String name , String surname , String email){
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    @Override
    public String getMessage(){
        return "Client with name: "+name+ ", surname: "+surname+", and email: "+email+" already exists.";
    }
}

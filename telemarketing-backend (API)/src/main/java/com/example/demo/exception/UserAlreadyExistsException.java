package com.example.demo.exception;


public class UserAlreadyExistsException extends RuntimeException {
    private String username;

    public UserAlreadyExistsException(String username){
        this.username = username;

    }
    @Override
    public String getMessage(){
        return "User with username: "+username+" already exists.";
    }
}

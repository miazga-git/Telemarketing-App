package com.example.demo.exception;

public class UserNotFoundException extends RuntimeException{
    private String userName;

    public UserNotFoundException(String userName){
        this.userName = userName;
    }
    public String getMessage(){
        return "User with id: "+userName+" doesn't exist.";
    }
}

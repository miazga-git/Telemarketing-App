package com.example.demo.exception;



public class ClientNotFoundException extends RuntimeException{
    private Long clientId;

    public ClientNotFoundException(Long clientId){
        this.clientId = clientId;
    }

    @Override
    public String getMessage(){
        return "Client with id: "+clientId+" doesn't exist.";
    }
}

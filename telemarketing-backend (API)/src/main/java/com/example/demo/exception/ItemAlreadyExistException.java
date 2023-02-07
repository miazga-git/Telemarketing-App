package com.example.demo.exception;

public class ItemAlreadyExistException extends RuntimeException {

    private String name;

    public ItemAlreadyExistException(String name) {
        this.name = name;
    }

    @Override
    public String getMessage(){
        return "Item with name: " + name + " already exists.";}

}

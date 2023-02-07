package com.example.demo.exception;

public class ItemNotFoundException extends RuntimeException{
    private Long itemId;

    public ItemNotFoundException(Long itemId){
        this.itemId = itemId;
    }

    public String getMessage(){
        return "Item with id: "+itemId+" doesn't exist.";
    }
}

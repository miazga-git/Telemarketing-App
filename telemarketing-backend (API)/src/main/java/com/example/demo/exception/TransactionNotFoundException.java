package com.example.demo.exception;


public class TransactionNotFoundException extends RuntimeException{
    private Long transactionId;

    public TransactionNotFoundException(Long transactionId){
            this.transactionId = transactionId;
        }
   public String getMessage(){
            return "Transaction with id: "+transactionId+" doesn't exist.";
        }
    }


package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class TransactionCreateDto {

    private Long itemId;

    private Long clientId;


    private String userName;
    private int quantity;
    private int discount;
    private boolean successful;
    private double support;
    private double confidence;
    private double correlation;
    private boolean isPlanned;

    public TransactionCreateDto(Long itemId, Long clientId, String userName, int quantity, int discount,boolean successful){
        this.itemId = itemId;
        this.clientId = clientId;
        this.quantity = quantity;
        this.successful = successful;
        this.userName = userName;
        this.discount = discount;
        //this.userName = userName;
    }
    public TransactionCreateDto(Long itemId, Long clientId, String userName, int quantity, int discount,boolean successful,double support, double confidence, double correlation, boolean isPlanned){
        this.itemId = itemId;
        this.clientId = clientId;
        this.quantity = quantity;
        this.successful = successful;
        //this.userId = userId;
        this.discount = discount;
        this.userName = userName;
        this.support = support;
        this.confidence = confidence;
        this.correlation = correlation;
        this.isPlanned = isPlanned;
    }
}

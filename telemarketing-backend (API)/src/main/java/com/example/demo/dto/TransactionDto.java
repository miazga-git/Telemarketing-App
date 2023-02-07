package com.example.demo.dto;

import com.example.demo.entity.Client;
import com.example.demo.entity.Item;
import com.example.demo.entity.Transaction;
import com.example.demo.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Setter
@Getter
@NoArgsConstructor
public class TransactionDto {

    private Long id;

    private ItemDto item;

    private ClientDto client;

    private UserDto user;

    private int quantity;

    private boolean successful;

    private int discount;
    private double support;
    private double confidence;
    private double correlation;
    private boolean isPlanned;

    public TransactionDto(Transaction transaction){
        this.id = transaction.getId();
        this.quantity = transaction.getQuantity();
        this.successful = transaction.isSuccessful();
        this.client = mapClient(transaction.getClient());
        this.item = mapItem(transaction.getItem());
        this.discount = transaction.getDiscount();
        this.user = mapUser(transaction.getUser());
        this.support = transaction.getSupport();
        this.confidence = transaction.getConfidence();
        this.correlation = transaction.getCorrelation();
        this.isPlanned = transaction.isPlanned();
    }

    private ClientDto mapClient(Client client){
        return Optional.ofNullable(client).map(ClientDto::new).orElse(null);
    }
    private ItemDto mapItem(Item item){
        return Optional.ofNullable(item).map(ItemDto::new).orElse(null);
    }
    private UserDto mapUser(User user){
        return Optional.ofNullable(user).map(UserDto::new).orElse(null);
    }
}

package com.example.demo.entity;

import com.example.demo.dto.TransactionCreateDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Setter
@Getter
@NoArgsConstructor
@Table(name = "transaction")
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

     @ManyToOne
     @JoinColumn(name = "user_id")
     private User user;

    @NotNull(message = "Quantity cannot be blank")
    private int quantity;

    @NotNull(message = "isSuccessful cannot be blank")
    private boolean successful;

    private int discount;

    private double support;

    private double confidence;

    private double correlation;

    private boolean isPlanned;
    public Transaction(int quantity , boolean successful, Item item, Client client, User user, int discount, double support, double confidence, double correlation, boolean isPlanned){
        this.quantity = quantity;
        this.successful = successful;
        this.item = item;
        this.client = client;
        this.user = user;
        this.discount = discount;
        this.support = support;
        this.confidence = confidence;
        this.correlation = correlation;
        this.isPlanned = isPlanned;
    }
    public Transaction(int quantity , boolean successful, Item item, Client client, User user, int discount){
        this.quantity = quantity;
        this.successful = successful;
        this.item = item;
        this.client = client;
        this.user = user;
        this.discount = discount;
    }

}

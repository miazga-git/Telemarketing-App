package com.example.demo.dto;

import com.example.demo.entity.Client;
import com.example.demo.entity.Item;
import com.example.demo.entity.Transaction;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;
@Setter
@Getter
@NoArgsConstructor
public class TransactionStatiscticsDto {

    private ItemDto item;

    private Integer numberOfSuccessful;

    private Integer numberOfUnsuccessful;

    public TransactionStatiscticsDto(Item item , Integer numberOfSuccessful, Integer numberOfUnsuccessful){
        this.numberOfSuccessful = numberOfSuccessful;
        this.numberOfUnsuccessful = numberOfUnsuccessful;
        this.item = mapItem(item);
    }

    private ItemDto mapItem(Item item){
        return Optional.ofNullable(item).map(ItemDto::new).orElse(null);
    }

}

package com.example.demo.dto;

import com.example.demo.entity.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ItemDto {

    private Long id;
    private Double price;
    private String name;
    private String description;
    private String url;

    public ItemDto(Item item){
        this.id = item.getId();
        this.name = item.getName();
        this.description = item.getDescription();
        this.price = item.getPrice();
        this.url = item.getUrl();
    }

}

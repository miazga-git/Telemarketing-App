package com.example.demo.entity;

import com.example.demo.dto.ItemCreateDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double price;

    @NotBlank(message = "Name cannot be blank")
    private String name;

    @Type(type = "text")
    private String description;

    @NotBlank(message = "Url cannot be blank")
    private String url;

    public Item( @NotBlank(message = "Name cannot be blank") String name, String description,Double price, @NotBlank(message = "Url cannot be blank") String url) {
        this.price = price;
        this.name = name;
        this.description = description;
        this.url = url;
    }
    public Item(ItemCreateDto itemCreateDto){
        this.price = itemCreateDto.getPrice();
        this.name = itemCreateDto.getName();
        this.description = itemCreateDto.getDescription();
        this.url = itemCreateDto.getUrl();
    }

}

package com.example.demo.dto;

import com.example.demo.entity.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
@NoArgsConstructor
public class ItemCreateDto {

    private Double price;
    @NotBlank(message = "Name cannot be blank")
    private String name;
    @Type(type = "text")
    private String description;
    @NotBlank(message = "Url cannot be blank")
    private String url;

    public ItemCreateDto(String name, String description, Double price, String url){
        this.name=name;
        this.description=description;
        this.price=price;
        this.url=url;
    }
}

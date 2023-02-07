package com.example.demo.dto;

import com.example.demo.entity.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;
@Setter
@Getter
@NoArgsConstructor
public class ItemAndSupportDto {
        private ItemDto item;
        private Double support;
        private Double confidence;
        private Double correlation;

        public ItemAndSupportDto(Item item , Double support, Double confidence, Double correlation){
            this.support = support;
            this.confidence = confidence;
            this.correlation = correlation;
            this.item = mapItem(item);
        }

        private ItemDto mapItem(Item item){
            return Optional.ofNullable(item).map(ItemDto::new).orElse(null);
        }
}

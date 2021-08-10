package com.example.telemarketingapi.Rest;

import com.example.telemarketingapi.Classes.Item;
import com.example.telemarketingapi.Data.ItemRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ItemRestController {
    private final ItemRepository itemRepository;

    public ItemRestController(ItemRepository itemRepository){ this.itemRepository=itemRepository;}

    @GetMapping("/api/iteminfo")
    List<Item> findAllItems(){
        List<Item> items = new ArrayList<>();
        itemRepository.findAll().forEach(items::add);
        return items;
    }


}

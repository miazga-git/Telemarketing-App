package com.example.telemarketingapi.Rest;

import com.example.telemarketingapi.Classes.Item;
import com.example.telemarketingapi.Data.ItemRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
public class ItemRestController {
    private final ItemRepository itemRepository;

    public ItemRestController(ItemRepository itemRepository){ this.itemRepository=itemRepository;}

    //get all items
    @GetMapping("/api/iteminfo")
    List<Item> findAllItems(){
        List<Item> items = new ArrayList<>();
        itemRepository.findAll().forEach(items::add);
        return items;
    }
    //get item by id
    @GetMapping("/api/iteminfo/{id}")
    Optional<Item> findItem(@PathVariable Long id){
        System.out.println("tutaj jestem ========================");
        System.out.println("id:"+id);
        System.out.println(itemRepository.findById(id));
        //List<Item> items = new ArrayList<>();
        //itemRepository.findById(id).forEach(items::add);
        //return items;
        return itemRepository.findById(id);

    }

    //create item
    @PostMapping("/api/iteminfo")
    public Item createItem(@RequestBody Item item){
        return itemRepository.save(item);
    }


}

package com.example.demo.service;

import com.example.demo.dto.ItemCreateDto;
import com.example.demo.dto.ItemDto;
import com.example.demo.dto.ItemUpdateDto;
import com.example.demo.entity.Item;
import com.example.demo.exception.ItemAlreadyExistException;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.repository.ItemRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService {
    private final ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public List<ItemDto> getAllItems(){
        return itemRepository.findAll()
                .stream()
                .map(item -> new ItemDto(item))
                .collect(Collectors.toList());
    }

    public ItemDto getItemById(Long itemId){
        return itemRepository.findById(itemId).map(item -> new ItemDto(item)).orElseThrow(() -> new ItemNotFoundException(itemId));
    }

    public ItemDto createItem(ItemCreateDto itemCreateDto){
        if(itemExists(itemCreateDto.getName()))
            throw new ItemAlreadyExistException(itemCreateDto.getName());
        Item item = new Item(itemCreateDto);
        return new ItemDto(itemRepository.save(item));

    }

    private boolean itemExists(String name) {
        return itemRepository.findByName(name).isPresent();
    }

    public void updateItem(Long itemId, ItemUpdateDto itemUpdateDto){
        Item item = itemRepository.findById(itemId).orElseThrow(() -> new ItemNotFoundException(itemId));
        updateItemData(item, itemUpdateDto);
        itemRepository.save(item);
    }

    private void updateItemData(Item item , ItemUpdateDto itemUpdateDto){
        item.setName(itemUpdateDto.getName());
        item.setDescription(itemUpdateDto.getDescription());
        item.setPrice(itemUpdateDto.getPrice());
        item.setUrl(itemUpdateDto.getUrl());
    }
    public void deleteItem(Long itemId){
        itemRepository.delete(
                itemRepository.findById(itemId).orElseThrow(() -> new ItemNotFoundException(itemId))
        );
    }
}

package com.example.telemarketingapi.Data;

import com.example.telemarketingapi.Classes.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item,Long> {

}

package com.example.telemarketingapi;

import com.example.telemarketingapi.Classes.Client;
import com.example.telemarketingapi.Classes.Item;
import com.example.telemarketingapi.Data.ClientRepository;
import com.example.telemarketingapi.Data.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TelemarketingapiApplication {

    public static void main(String[] args) {
        SpringApplication.run(TelemarketingapiApplication.class, args);
    }
    @Bean
    public CommandLineRunner dataLoader(ItemRepository itemRepo, ClientRepository clientRepo){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
               itemRepo.save(new Item("Pepsi","2l opakowanie",7.99,"https://pngimg.com/uploads/pepsi/pepsi_PNG1.png"));
               itemRepo.save(new Item("Coca-cola","2l opakowanie",7.99,"https://www.freeiconspng.com/uploads/bottle-coca-cola-png-transparent-2.png"));
               itemRepo.save(new Item("Lays Classic","Duża paczka",4.99,"https://pngimg.com/uploads/potato_chips/potato_chips_PNG79.png"));
               itemRepo.save(new Item("Heinz Ketchup","Tomato sauce",2.99,"https://pngimg.com/uploads/ketchup/ketchup_PNG65.png"));
               itemRepo.save(new Item("Caprio Juice","Perfect juice",2.49,"https://delidostawa.pl/1265-large_default/napoj-caprio-pomaranczowy-2-l.jpg"));
               itemRepo.save(new Item("Sprite","pyszny",5.49,"https://delikatesy-honorata.pl/wp-content/uploads/2019/07/sprite15.a.jpg"));
               clientRepo.save(new Client("Bartosz","Miazga",666526524,"bartosz.miazga1@gmail.com","Swietokrzyskie","Massalskiego","Kielce","25-636"));
            }
        };
    }
}




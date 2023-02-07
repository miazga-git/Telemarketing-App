package com.example.demo;

import com.example.demo.entity.Client;
import com.example.demo.entity.Item;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    @Bean
    public CommandLineRunner dataLoader(ItemRepository itemRepo, ClientRepository clientRepo){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
//                itemRepo.save(new Item("Pepsi","2l opakowanie",7.99,"https://pngimg.com/uploads/pepsi/pepsi_PNG1.png"));
//                itemRepo.save(new Item("Coca-cola","2l opakowanie",7.99,"https://www.freeiconspng.com/uploads/bottle-coca-cola-png-transparent-2.png"));
//                itemRepo.save(new Item("Lays Classic","Duża paczka",4.99,"https://pngimg.com/uploads/potato_chips/potato_chips_PNG79.png"));
//                itemRepo.save(new Item("Heinz Ketchup","Tomato sauce",2.99,"https://pngimg.com/uploads/ketchup/ketchup_PNG65.png"));
//                itemRepo.save(new Item("Caprio Juice","Perfect juice",2.49,"https://dhtonline.pl/environment/cache/images/500_500_productGfx_6481/5900334013552_T5.jpg"));
//                itemRepo.save(new Item("Sprite","pyszny",5.49,"https://delikatesy-honorata.pl/wp-content/uploads/2019/07/sprite15.a.jpg"));
//                clientRepo.save(new Client("Krzysztof","Ziach","215215214","krzysztof.ziach@gmail.com","Swietokrzyskie","Kasięcia-Janusza","Kielce","25-234"));
            }
        };
    }
}

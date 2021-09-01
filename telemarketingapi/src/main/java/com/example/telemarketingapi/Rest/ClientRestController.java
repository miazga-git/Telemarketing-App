package com.example.telemarketingapi.Rest;

import com.example.telemarketingapi.Classes.Client;
import com.example.telemarketingapi.Data.ClientRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ClientRestController {
    private final ClientRepository clientRepository;

    public ClientRestController(ClientRepository clientRepository){
        this.clientRepository=clientRepository;
    }

    //get all clients
    @GetMapping("/api/clientinfo")
    List<Client> findAllClients(){
        List<Client> clients = new ArrayList<>();
        clientRepository.findAll().forEach(clients::add);
        return clients;
    }
    //add new client
    @PostMapping("api/clientinfo")
    public Client createClient(@RequestBody Client client){
        return clientRepository.save(client);
    }
}

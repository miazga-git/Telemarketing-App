package com.example.demo.controller;

import com.example.demo.dto.ClientCreateDto;
import com.example.demo.dto.ClientDto;
import com.example.demo.dto.ClientUpdateDto;
import com.example.demo.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private final ClientService clientService;

    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @GetMapping
    public ResponseEntity<List<ClientDto>> getAllItems(){
        return new ResponseEntity<>(clientService.getAllItems(), HttpStatus.OK);
    }

    @GetMapping("/{clientId}")
    public ResponseEntity<ClientDto> getClientById(@PathVariable Long clientId){
        return new ResponseEntity<>(clientService.getClientById(clientId),HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ClientDto> createClient(@RequestBody @Valid ClientCreateDto clientCreateDto){
        return new ResponseEntity<>(clientService.createClient(clientCreateDto), HttpStatus.CREATED);
    }

    @PutMapping("/{clientId}")
    public ResponseEntity<Void> updateClub(@PathVariable Long clientId, @RequestBody @Valid ClientUpdateDto clientUpdateDto){
        clientService.updateClient(clientId, clientUpdateDto);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{clientId}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long clientId){
        clientService.deleteClient(clientId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

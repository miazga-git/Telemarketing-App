package com.example.demo.service;

import com.example.demo.dto.ClientCreateDto;
import com.example.demo.dto.ClientDto;
import com.example.demo.dto.ClientUpdateDto;
import com.example.demo.entity.Client;
import com.example.demo.exception.ClientAlreadyExistsException;
import com.example.demo.exception.ClientNotFoundException;
import com.example.demo.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientService {
    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<ClientDto> getAllItems() {
        return clientRepository.findAll()
                .stream()
                .map(client -> new ClientDto(client))
                .collect(Collectors.toList());
    }

    public ClientDto getClientById(Long clientId){
        return clientRepository.findById(clientId).map(client -> new ClientDto(client)).
                orElseThrow(() -> new ClientNotFoundException(clientId));
    }

    public ClientDto createClient(ClientCreateDto clientCreateDto) {
        if (clientExists(clientCreateDto.getName(), clientCreateDto.getSurname(), clientCreateDto.getEmail())) {
            throw new ClientAlreadyExistsException(clientCreateDto.getName(), clientCreateDto.getSurname(), clientCreateDto.getEmail());

        }
            Client client = new Client(clientCreateDto);
        return new ClientDto(clientRepository.save(client));


    }

    private boolean clientExists(String name, String surname, String email) {
        return clientRepository.findByNameAndSurnameAndEmail(name, surname, email).isPresent();
    }

    public void updateClient(Long clientId, ClientUpdateDto clientUpdateDto){
        Client client = clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException(clientId));
        updateClientData(client, clientUpdateDto);
        clientRepository.save(client);
    }

    private void updateClientData(Client client, ClientUpdateDto clientUpdateDto){
        client.setName(clientUpdateDto.getName());
        client.setSurname(clientUpdateDto.getSurname());
        client.setTelephoneNumber(clientUpdateDto.getTelephoneNumber());
        client.setEmail(clientUpdateDto.getEmail());
        client.setState(clientUpdateDto.getState());
        client.setStreet(clientUpdateDto.getStreet());
        client.setCity(clientUpdateDto.getCity());
        client.setZip(clientUpdateDto.getZip());
        client.setNumberOfChildren(clientUpdateDto.getNumberOfChildren());
        client.setAge(clientUpdateDto.getAge());
        client.setJob(clientUpdateDto.getJob());
    }

    public void deleteClient(Long clientId){
        clientRepository.delete(
                clientRepository.findById(clientId).orElseThrow(() -> new ClientNotFoundException(clientId))
        );
    }

}

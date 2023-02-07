package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.Client;
import com.example.demo.entity.Item;
import com.example.demo.entity.Transaction;
import com.example.demo.entity.User;
import com.example.demo.exception.ClientNotFoundException;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.exception.TransactionNotFoundException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repository.ClientRepository;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.TransactionRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final ClientRepository clientRepository;
    private final ItemRepository itemRepository;
    private  final UserRepository userRepository;

    public TransactionService(TransactionRepository transactionRepository, ClientRepository clientRepository, ItemRepository itemRepository , UserRepository userRepository){
        this.transactionRepository = transactionRepository;
        this.clientRepository = clientRepository;
        this.itemRepository = itemRepository;
        this.userRepository = userRepository;
    }

    public List<TransactionDto> getAllTransactions(){
        return transactionRepository.findAll().stream().map(transaction -> new TransactionDto(transaction)).collect(Collectors.toList());

    }
    public List<TransactionDto> getAllNotPlannedTransactions(){
        List<TransactionDto> transactions =transactionRepository.findAll().stream().map(transaction -> new TransactionDto(transaction)).collect(Collectors.toList());
        List<TransactionDto> notPlannedTransactions = new ArrayList<>();
        for(TransactionDto transaction: transactions){
            if(transaction.isPlanned()==false){
                notPlannedTransactions.add(transaction);
            }
        }
        return notPlannedTransactions;
    }

    public List<TransactionDto> getAllPlannedTransactions(){
        List<TransactionDto> transactions =transactionRepository.findAll().stream().map(transaction -> new TransactionDto(transaction)).collect(Collectors.toList());
        List<TransactionDto> plannedTransactions = new ArrayList<>();
        for(TransactionDto transaction: transactions){
            if(transaction.isPlanned()==true){
                plannedTransactions.add(transaction);
            }
        }
        return plannedTransactions;
    }
    public List<TransactionStatiscticsDto> getStatisticsPerItems() throws Exception {
        Integer numberOfSuccessfulTransactions;
        Integer numberOfUnsuccessfulTransactions;
        List<TransactionStatiscticsDto> newList = new ArrayList<>();
        for(Item item :itemRepository.findAll()){
            numberOfUnsuccessfulTransactions=0;
            numberOfSuccessfulTransactions=0;
            for(Transaction transaction :transactionRepository.findAll()){
                if(transaction.isPlanned()==false) {
                    if (transaction.getItem().getName() == item.getName()) {
                       // System.out.println("Transaction ID: " + transaction.getId());
                        if (transaction.isSuccessful())
                            numberOfSuccessfulTransactions++;
                        else
                            numberOfUnsuccessfulTransactions++;

                    }
                }
            }
            newList.add(new TransactionStatiscticsDto(item,numberOfSuccessfulTransactions,numberOfUnsuccessfulTransactions));
        }
        return newList;
    }
    public TransactionDto createTransaction(TransactionCreateDto transactionCreateDto){
        Client client = clientRepository.findById(transactionCreateDto.getClientId()).orElseThrow(() -> new ClientNotFoundException(transactionCreateDto.getClientId()));
        Item item = itemRepository.findById(transactionCreateDto.getItemId()).orElseThrow(() -> new ItemNotFoundException(transactionCreateDto.getItemId()));
        User user = userRepository.findUserByUsername(transactionCreateDto.getUserName()).orElseThrow(() -> new UserNotFoundException(transactionCreateDto.getUserName()));

        Transaction transaction;
        if(transactionCreateDto.isPlanned()==true){
            transaction = new Transaction(transactionCreateDto.getQuantity(), transactionCreateDto.isSuccessful(), item, client, user, transactionCreateDto.getDiscount(),transactionCreateDto.getSupport(),transactionCreateDto.getConfidence(),transactionCreateDto.getCorrelation(), transactionCreateDto.isPlanned() );
        }else{
            transaction = new Transaction(transactionCreateDto.getQuantity(), transactionCreateDto.isSuccessful(), item, client, user, transactionCreateDto.getDiscount());
        }
        return new TransactionDto(transactionRepository.save(transaction));

    }
    public HashMap<String,Integer> getStatistics(){
        Integer numberOfSuccessfulTransactions=0;
        Integer numberOfUnsuccessfulTransactions=0;
        HashMap<String, Integer> map = new HashMap<>();
        for(Transaction transaction :transactionRepository.findAll()){
            if(transaction.isPlanned()==false){
                if(transaction.isSuccessful())
                    numberOfSuccessfulTransactions++;
                else
                    numberOfUnsuccessfulTransactions++;
            }
        }
        map.put("successful",numberOfSuccessfulTransactions);
        map.put("unSuccessful",numberOfUnsuccessfulTransactions);
        
        return map;
    }

    public List<ItemAndSupportDto> getThreeItemsWithBiggestSupport(Long itemAId){
       // List<ItemDto> threeItems = new ArrayList<>();
       // HashMap<ItemDto,Double> threeItemsWithSupport = new HashMap<>();
       // System.out.println("Wszedlem do funkcji getThreeItemsWithBiggestSupport");
        List<ItemAndSupportDto> listOfThree = new ArrayList<>();
        HashMap<Long, Double> mapItemIdToSupport = new HashMap<>();
        for(Item item: itemRepository.findAll()){
            if(item.getId()!= itemAId){
                double supportForItem = getParameters(itemAId,item.getId())[0];
                mapItemIdToSupport.put(item.getId(),supportForItem);
            }
        }//po zakonczeniu petli mamy zmapowany kazdy item z bazy na support odpowiadajacy parze itemAId, z kazdym innym itemem z bazy

        HashMap<Long, Double> newMapItemIdToSupport =sortByValue(mapItemIdToSupport);
        List<Long> list = convertSetToList(newMapItemIdToSupport.keySet());
        Collections.reverse(list);
        int counter =0;


        for(Long itemId: list){
            if(counter<3){
                //threeItems.add(itemRepository.findById(itemId).map(item -> new ItemDto(item)).orElseThrow(() -> new ItemNotFoundException(itemId)));
                double supportForItem = getParameters(itemAId,itemId)[0];
                double confidenceForItem = getParameters(itemAId,itemId)[1];
                double correlationForItem = getParameters(itemAId,itemId)[2];
                //threeItemsWithSupport.put(.map(item -> new ItemDto(item)).orElseThrow(() -> new ItemNotFoundException(itemId)),supportForItem);
                listOfThree.add(new ItemAndSupportDto(itemRepository.findById(itemId).orElseThrow(() -> new ItemNotFoundException(itemId)),supportForItem,confidenceForItem, correlationForItem));
                counter++;
            }
        }
        return listOfThree;
    }
    public static <T> List<T> convertSetToList(Set<T> set)
    {
        // create an empty list
        List<T> list = new ArrayList<>();

        // push each element in the set into the list
        for (T t : set)
            list.add(t);

        // return the list
        return list;
    }
    // function to sort hashmap by values
    public static HashMap<Long, Double> sortByValue(HashMap<Long, Double> hm)
    {
        // Create a list from elements of HashMap
        List<Map.Entry<Long, Double> > list =
                new LinkedList<Map.Entry<Long, Double> >(hm.entrySet());

        // Sort the list
        Collections.sort(list, new Comparator<Map.Entry<Long, Double> >() {
            public int compare(Map.Entry<Long, Double> o1,
                               Map.Entry<Long, Double> o2)
            {
                return (o1.getValue()).compareTo(o2.getValue());
            }
        });

        // put data from sorted list to hashmap
        HashMap<Long, Double> temp = new LinkedHashMap<Long, Double>();
        for (Map.Entry<Long, Double> aa : list) {
            temp.put(aa.getKey(), aa.getValue());
        }
        return temp;
    }
    public Double[] getParameters(Long itemAId , Long itemBId){//funkcja zwraca support dla dowolnych itemAId, itemBId
        double numberOfTransactionsWithAandB = 0;
        double numberOfTransactionsWithA = 0;
        List<Long> clientIds = new ArrayList<>(); // lista do przechowywania Ids klientów , którzy są w bazie danych w transakcjach
        for(Transaction transaction : transactionRepository.findAll()){
            if(transaction.isPlanned()==false&&transaction.isSuccessful()){
                Long clientId = transaction.getClient().getId();
                if(!clientIds.contains(clientId)){
                    clientIds.add(clientId);
                }
            }
        }
        int isThereItemA, isThereItemB;
        for(Long clientId : clientIds){
            isThereItemA = 0;
            isThereItemB = 0;
            for(Transaction transaction : transactionRepository.findAll()){//getTransactionByClientId
                if(transaction.isPlanned()==false&&transaction.isSuccessful()){
                    if(transaction.getItem().getId() == itemAId && transaction.getClient().getId() == clientId)
                        isThereItemA = 1;
                    if(transaction.getItem().getId() == itemBId && transaction.getClient().getId() == clientId)
                        isThereItemB = 1;
                }
            }
            if(isThereItemA == 1 && isThereItemB == 1)
                numberOfTransactionsWithAandB++;
            if(isThereItemA == 1)
                numberOfTransactionsWithA++;

        }
        double support = numberOfTransactionsWithAandB / clientIds.size();
        double confidence = numberOfTransactionsWithAandB / numberOfTransactionsWithA;
        double correlation =0;
        if(confidence!=0) {
            correlation = support / confidence;
        }

        Double[] parameters = new Double[3];
        parameters[0] = support;//0 - support
        parameters[1] = confidence;//1 - confidence
        parameters[2] = correlation;//2 - correlation
        return parameters;


    }
    public void deleteTransaction(Long transactionId){
        transactionRepository.delete(
                transactionRepository.findById(transactionId).orElseThrow(() -> new TransactionNotFoundException(transactionId))
        );
    }
}

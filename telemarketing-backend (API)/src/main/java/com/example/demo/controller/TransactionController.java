package com.example.demo.controller;

import com.example.demo.dto.*;
import com.example.demo.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService){
        this.transactionService = transactionService;
    }

    @GetMapping
    public ResponseEntity<List<TransactionDto>> getTransactions(){
        return new ResponseEntity<>(transactionService.getAllTransactions(), HttpStatus.OK);
    }
    @GetMapping("/supportItems/{itemAid}")
    public ResponseEntity<List<ItemAndSupportDto>> getThreeItemsWithBiggestSupport(@PathVariable Long itemAid){
        return new ResponseEntity<>(transactionService.getThreeItemsWithBiggestSupport(itemAid),HttpStatus.OK);
    }
    @GetMapping("/statistics")
    public ResponseEntity<HashMap<String,Integer>> getStatistics(){
        return new ResponseEntity<>(transactionService.getStatistics(),HttpStatus.OK);
    }
    @GetMapping("/statistics/perItems")
    public ResponseEntity<List<TransactionStatiscticsDto>> getStatisticsPerItems() throws Exception {
        return new ResponseEntity<>(transactionService.getStatisticsPerItems(),HttpStatus.OK);
    }
    @GetMapping("/planned")
    public ResponseEntity<List<TransactionDto>> getAllPlannedTransactions() throws Exception {
        return new ResponseEntity<>(transactionService.getAllPlannedTransactions(),HttpStatus.OK);
    }
    @GetMapping("/notPlanned")
    public ResponseEntity<List<TransactionDto>> getAllNotPlannedTransactions() throws Exception {
        return new ResponseEntity<>(transactionService.getAllNotPlannedTransactions(),HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<TransactionDto> createTransaction(
            @RequestBody @Valid TransactionCreateDto transactionCreateDto){
        return new ResponseEntity<>(transactionService.createTransaction(transactionCreateDto),HttpStatus.CREATED);
    }
    @DeleteMapping("/{transactionId}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long transactionId){
        transactionService.deleteTransaction(transactionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

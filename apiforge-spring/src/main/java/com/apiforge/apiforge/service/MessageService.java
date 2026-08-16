package com.apiforge.apiforge.service;

import org.springframework.stereotype.Service;

@Service
public class MessageService {
    public String sayHello(){
        return "Hello World from MessageService";
    }
}

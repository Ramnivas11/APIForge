package com.apiforge.apiforge.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class MessageService {
    public String sayHello(){
        return "Hello World from Service";
    }
}

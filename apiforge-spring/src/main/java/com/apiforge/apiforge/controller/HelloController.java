package com.apiforge.apiforge.controller;

import com.apiforge.apiforge.service.MessageService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    private final MessageService messageService;
    public HelloController(MessageService messageService) {
        this.messageService = messageService;
    }
    @GetMapping("/api/hello")
    public String sayHello(){
        return messageService.sayHello();
    }
}

package com.apiforge.apiforge.controller;

import com.apiforge.apiforge.dto.GreetingRequest;
import com.apiforge.apiforge.dto.HelloResponse;
import com.apiforge.apiforge.service.MessageService;
import org.springframework.web.bind.annotation.*;


@RestController
public class HelloController {
    private final MessageService messageService;
    public HelloController(MessageService messageService) {
        this.messageService = messageService;
    }
    @GetMapping("/api/hello")
    public HelloResponse sayHello(){
        String message=messageService.sayHello();
        return new HelloResponse(message,"Success");
    }

    @PostMapping("api/greet")
    public HelloResponse sayGreet(@RequestParam GreetingRequest request){
        return new HelloResponse("Hello"+request.name(),"Success");
    }
}

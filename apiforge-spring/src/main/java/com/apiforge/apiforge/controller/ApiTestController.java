package com.apiforge.apiforge.controller;

import com.apiforge.apiforge.dto.ApiTestRequest;
import com.apiforge.apiforge.service.ApiTestService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiTestController {
    @Autowired
    ApiTestService apiTestService;
    @PostMapping("/test")
    public String testApi(@Valid @RequestBody ApiTestRequest request) {

        return apiTestService.execute(request);
    }
}
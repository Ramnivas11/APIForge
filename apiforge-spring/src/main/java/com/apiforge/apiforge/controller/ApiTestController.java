package com.apiforge.apiforge.controller;

import com.apiforge.apiforge.dto.ApiTestRequest;
import com.apiforge.apiforge.dto.ApiTestResponse;
import com.apiforge.apiforge.service.ApiTestService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiTestController {

    private final ApiTestService apiTestService;

    public ApiTestController(ApiTestService apiTestService) {
        this.apiTestService = apiTestService;
    }

    @PostMapping("/test")
    public ApiTestResponse testApi(@Valid @RequestBody ApiTestRequest request) {
        return apiTestService.execute(request);
    }
}
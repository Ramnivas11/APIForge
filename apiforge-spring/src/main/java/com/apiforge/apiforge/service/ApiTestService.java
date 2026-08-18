package com.apiforge.apiforge.service;

import com.apiforge.apiforge.client.HttpClientService;
import com.apiforge.apiforge.dto.ApiTestRequest;
import org.springframework.stereotype.Service;


@Service
public class ApiTestService {
    private final HttpClientService httpClientService;
    public ApiTestService(HttpClientService httpClientService) {
        this.httpClientService = httpClientService;
    }

    public String execute(ApiTestRequest request){
        return httpClientService.get(request.url());
    }
}

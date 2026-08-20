package com.apiforge.apiforge.service;

import com.apiforge.apiforge.client.HttpClientService;
import com.apiforge.apiforge.dto.ApiTestRequest;
import com.apiforge.apiforge.dto.ApiTestResponse;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;


@Service
public class ApiTestService {
    private final HttpClientService httpClientService;
    public ApiTestService(HttpClientService httpClientService) {
        this.httpClientService = httpClientService;
    }

    public ApiTestResponse execute(ApiTestRequest request){
        HttpMethod method = HttpMethod.valueOf(request.method().toUpperCase());

        return httpClientService.execute(method,request.url(),request.headers(),request.body());
    }
}

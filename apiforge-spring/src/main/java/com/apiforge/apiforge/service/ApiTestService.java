package com.apiforge.apiforge.service;

import com.apiforge.apiforge.dto.ApiTestRequest;
import org.springframework.stereotype.Service;

@Service
public class ApiTestService {
    public String execute(ApiTestRequest request){
        return "request received for :"+request.url();
    }
}

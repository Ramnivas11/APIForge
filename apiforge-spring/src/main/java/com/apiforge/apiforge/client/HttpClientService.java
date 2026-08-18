package com.apiforge.apiforge.client;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class HttpClientService {
    private final RestClient restClient;
    public HttpClientService(RestClient restClient) {
        this.restClient = restClient;
    }
    public String get(String url){
        return restClient.get().uri(url).retrieve().body(String.class);
    }
}

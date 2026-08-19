package com.apiforge.apiforge.client;

import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Map;

@Service
public class HttpClientService {
    private final RestClient restClient;
    public HttpClientService(RestClient restClient) {
        this.restClient = restClient;
    }
    public String execute(
            HttpMethod method,
            String url,
            Map<String, String> headers,
            String body
    ){
        var request = restClient
                .method(method)
                .uri(url)
                .headers(httpHeaders ->
                        headers.forEach(httpHeaders::set)
                );

        if (body != null && !body.isBlank()) {
            request.body(body);
        }
        return request.retrieve().body(String.class);
    }
}

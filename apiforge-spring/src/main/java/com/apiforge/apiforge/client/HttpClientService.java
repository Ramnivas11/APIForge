package com.apiforge.apiforge.client;

import com.apiforge.apiforge.dto.ApiTestResponse;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Map;
@Service
public class HttpClientService {

    private final RestClient restClient;

    public HttpClientService(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.build();
    }

    public ApiTestResponse execute(
            HttpMethod method,
            String url,
            Map<String, String> headers,
            String body
    ) {

        long start = System.currentTimeMillis();

        var request = restClient
                .method(method)
                .uri(url)
                .headers(httpHeaders ->
                        headers.forEach(httpHeaders::set)
                );

        if (body != null && !body.isBlank()) {
            request.body(body);
        }

        return request.exchange((request, response) -> {

            String responseBody = response.bodyTo(String.class);

            long duration =
                    System.currentTimeMillis() - start;

            Map<String, String> responseHeaders =
                    response.getHeaders()
                            .toSingleValueMap();

            return new ApiTestResponse(
                    response.getStatusCode().value(),
                    responseHeaders,
                    responseBody,
                    duration
            );
        });
    }
}

package com.apiforge.apiforge.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ApiTestRequest(


        @NotBlank(message = "Http method is required")
        String method,

        @NotBlank(message = "url is required")
        @Size(max=2048 , message ="url is too long")
        String url,
        Map<String, String> headers,
        String body
) {

}

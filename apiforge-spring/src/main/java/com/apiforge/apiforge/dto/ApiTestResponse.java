package com.apiforge.apiforge.dto;

import java.util.Map;

public record ApiTestResponse(
        int status,
        Map<String, String> headers,
        String body,
        long durationMs
) {
}

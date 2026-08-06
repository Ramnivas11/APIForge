const axios = require("axios");

const executeRequest = async (requestData) => {
    const { method, url, headers, query, body, timeout } = requestData;

    const startTime = Date.now();

    try {
        const response = await axios({
            method,
            url,
            headers,
            params: query,
            data: body,
            timeout: timeout || 5000,
        });

        const endTime = Date.now();

        return {
            success: true,
            status: response.status,
            responseTime: endTime - startTime,
            headers: response.headers,
            data: response.data,
        };

    } catch (error) {

        const endTime = Date.now();

        if (error.response) {
            return {
                success: false,
                status: error.response.status,
                responseTime: endTime - startTime,
                headers: error.response.headers,
                data: error.response.data,
            };
        }

        if (error.request) {
            return {
                success: false,
                status: 503,
                responseTime: endTime - startTime,
                message: "Unable to reach the server",
            };
        }
        if (error.code === "ECONNABORTED") {

            return {
                success: false,
                status: 408,
                message: "Request timed out",
                responseTime: endTime - startTime
            };

        }

        return {
            success: false,
            status: 500,
            responseTime: endTime - startTime,
            message: error.message,
        };
    }
};

module.exports = {
    executeRequest,
};
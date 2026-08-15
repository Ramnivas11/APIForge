const axios = require("axios");
const { validateTargetUrl } = require("../utils/urlValidator");

const calculatePayloadSize = (data, headers) => {
    if (headers && headers["content-length"]) {
        const parsedSize = parseInt(headers["content-length"], 10);
        if (!isNaN(parsedSize)) return parsedSize;
    }

    if (data === undefined || data === null) return 0;
    if (typeof data === "string") return Buffer.byteLength(data, "utf8");
    if (Buffer.isBuffer(data)) return data.length;
    
    try {
        return Buffer.byteLength(JSON.stringify(data), "utf8");
    } catch {
        return 0;
    }
};

const formatBytes = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const executeRequest = async (requestData) => {

    const { method, url, headers, query, body, timeout } = requestData;

    validateTargetUrl(url);

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
        const responseSizeBytes = calculatePayloadSize(response.data, response.headers);

        return {
            success: true,
            status: response.status,
            responseTime: endTime - startTime,
            responseSizeBytes,
            responseSize: formatBytes(responseSizeBytes),
            headers: response.headers,
            data: response.data,
        };

    } catch (error) {

        const endTime = Date.now();

        if (error.response) {
            const responseSizeBytes = calculatePayloadSize(error.response.data, error.response.headers);
            return {
                success: false,
                status: error.response.status,
                responseTime: endTime - startTime,
                responseSizeBytes,
                responseSize: formatBytes(responseSizeBytes),
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
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const apiLimiter = require("./middlewares/rateLimiter");
const apiRoutes = require("./routes/api.routes");

const app = express();

// Enable trust proxy for accurate client IP detection in rate limiting behind proxies
app.set("trust proxy", 1);

app.use(cors());
app.use(helmet());
app.use(express.json({
    limit: "1mb"
}));

// Root endpoint ping
app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "API Testing Platform Server is running. Use /api routes."
    });
});

// API routes with rate limiter
app.use("/api", apiLimiter, apiRoutes);

// 404 Handler for undefined routes
app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err);
    return res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

module.exports = app;
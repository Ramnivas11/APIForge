const express = require("express");
const { testApi } = require("../controllers/api.controller");

const router = express.Router();

router.get("/health", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "API testing platform is up and running.",
        timestamp: new Date().toISOString()
    });
});

router.post("/test", testApi);

module.exports = router;
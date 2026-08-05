const express = require("express");
const { testApi } = require("../controllers/api.controller");

const router = express.Router();

router.post("/test", testApi);

module.exports = router;
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const apiRoutes = require("./routes/api.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", apiRoutes);

module.exports = app;
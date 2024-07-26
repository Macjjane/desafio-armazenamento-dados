const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use("/api/auth/user", require("./routes/challenge-routes"));


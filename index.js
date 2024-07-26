const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require('./connect/database')


connectDB()



const port = process.env.PORT
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use("/api/auth/user", require("./routes/challenge-routes"));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
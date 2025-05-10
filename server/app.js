const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/connection");
const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require('./routes/task');

app.use(express.json());

app.use(cors());

app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

//localhost:8000/api/v1/sign-in

app.use("/",(req, res) => {
    res.send("Hello Backend");
})
const PORT = 8000;

app.listen(PORT, () => {
    console.log("Server Started");
})
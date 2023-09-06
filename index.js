const express = require("express");
const app = express();
const port = 2000;
const bodyParser = require("body-parser");

const { todo } = require("./routers");

app.use(bodyParser.json());

app.use("/todo", todo);

app.get("/", (req, res) => res.send("<h1>Welcome to API</h1>"));

app.listen(port, () => console.log("Server running on port", port));

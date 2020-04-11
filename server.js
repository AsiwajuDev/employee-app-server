const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Employee App Server!");
});

app.listen(3000, () => {
  console.log("Server started");
});

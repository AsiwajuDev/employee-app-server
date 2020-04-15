const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//Import Route
const createEmployee = require("./Route/api/CreateEmployee");
const deleteEmployee = require("./Route/api/DeleteEmployee");
const editEmployee = require("./Route/api/EditEmployee");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-kya97.mongodb.net/test`;

//Connect DB
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Welcome to Employee App Server!");
});

//Use Route
app.use("/api/employee", createEmployee);
app.use("/api/employee", deleteEmployee);
app.use("/api/employee", editEmployee);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

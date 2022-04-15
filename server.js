const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@cluster0.kgy6g.mongodb.net/Cluster0?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB Successfully Connected!"))
  .catch((err) => console.log(err));

app.listen(PORT);

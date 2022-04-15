const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");

const controllers = require("./controllers");

const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer();

app.use(cors());
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MDB_USERNAME}:${process.env.MDB_PASSWORD}@cluster0.kgy6g.mongodb.net/Cluster0?retryWrites=true&w=majority`
  )
  .then(() => console.log("MongoDB Successfully Connected!"))
  .catch((err) => console.log(err));

app.get("/all", controllers.allVery);
app.post("/new", upload.none(), controllers.newVery);

app.listen(PORT);

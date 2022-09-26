const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const server = express();

const galleryRoute = require("./Routes/gallery");

server.use(express.json({ limit: "200mb", extended: true }));
server.use(express.urlencoded({ limit: "200mb", extended: true }));
server.use(cors());

//route goes here
server.use(galleryRoute);

server.use(express.static(path.join(__dirname, "client", "build")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//server listening at port 5000

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGO_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      server.listen(PORT, (err) => {
        if (err) {
          console.log("Error Connecting To Server");
        } else {
          console.log("Connections Successful");
        }
      });
    } else {
      console.log("Error Connecting To Database");
    }
  }
);

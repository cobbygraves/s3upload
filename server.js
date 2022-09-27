const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const AWS = require("aws-sdk");

dotenv.config();

const galleryRoute = require("./routes/gallery");

const server = express();

server.use(express.json({ limit: "200mb", extended: true }));
server.use(express.urlencoded({ limit: "200mb", extended: true }));
server.use(cors());

//route goes here

server.use("/gallery", galleryRoute);

server.get("/presigned-url/:key", (req, res) => {
  const s3 = new AWS.S3();
  const params = { Bucket: process.env.AWS_BUCKET, Key: `${req.params.key}` };
  s3.getSignedUrl("getObject", params, (err, url) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(url);
  });
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

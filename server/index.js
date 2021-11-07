//import what we need

//import express

//import body-parser

//create routes (endpoints) GET, POST, PUT, DELETES

//create listener

const express = require("express");
require("dotenv").config();
const massive = require("massive");
const tweetCtrl = require("./controller/tweetController");

const { CONNECTION_STRING, PORT } = process.env;
const app = express();
app.use(express.json());

app.post("/api/tweets", tweetCtrl.addTweet);
app.get("/api/tweets", tweetCtrl.getAllTweets);
app.delete("/api/tweets/:id", tweetCtrl.deleteTweet);
app.put("/api/tweets/:id", tweetCtrl.editTweet);
app.get("/api/tweet/:id", tweetCtrl.getTweetByID);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  app.set("db", dbInstance);
  console.log("db connected");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

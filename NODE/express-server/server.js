// require express server
const express = require("express");
const app = express();

// server routes

app.listen(3000, function() {
  console.log("Server Running...")
});

app.get("/", function(req, res){
  res.send("Hello World");
  // console.log(req);
});

app.get("/contact", function(req, res){
  res.send("Contact me at 0892547560");
});

app.get("/about", function(req, res){
  res.send("Hello, My name is David Adindu. I am a 20 year old software developer.");
});





// This Server is Running on port localhost:3000
const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("Server Running")
})

app.listen(3000, function(){
  console.log("Server Running")
});
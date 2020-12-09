// This Server is Running on port localhost:3000
const express = require("express");
const https = require("https");

const app = express();


// send a response in the browser
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.send("Server Running")
})


// send a html file
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});
// send other static files e.g. css,imgs
app.use(express.static("public"));





app.listen(3000, function(){
  console.log("Server Running")
});
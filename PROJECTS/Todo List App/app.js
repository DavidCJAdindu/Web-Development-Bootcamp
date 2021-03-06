
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Eat", "Sleep", "Code"];
const workItems = [];

app.get("/", function(req, res){

  const day = date.getDate();

  res.render("list", {listTitle: day, newItems: items});

});

app.post("/", function(req, res){
  
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } 
  else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work" , function(req, res){
  res.render("list", {listTitle: "Work List", newItems: workItems});
});











// HEROKU PORT or 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Server Running")
});


const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

const addItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  const day = today.toLocaleDateString("en-US", options)

  res.render("list", {day: day, newItems: addItems});

});

app.post("/", function(req, res){

  const addItem = req.body.newItem;

  addItems.push(addItem);



  res.redirect("/");


});



// HEROKU PORT or 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Server Running")
});

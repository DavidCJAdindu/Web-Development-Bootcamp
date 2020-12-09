const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  const query = req.body.cityName;
  const apiKey = "7257ee045cd98983e9a61db0f4013f72";
  const units = "metric"
  
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ units +""; 

  https.get(url, function(response){

    console.log(response.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);

      const description = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const location = weatherData.name;

      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";



      res.write("<h1>The weather is currently " + description + "</h1>");
      res.write("<p>The temperature in " + location + " is " + temp + " degrees</p>");
      res.write("<img></img>");
      res.write("<img src=" + imageURL + ">");

      res.send();

    
    });

  });

});


app.listen(3000, function(){
  console.log("Server Running");
});




/*

const apiKey = "7257ee045cd98983e9a61db0f4013f72";
  const units = "metric"
  
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ units +""; 

  https.get(url, function(response){

    console.log(response.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);

      const description = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const location = weatherData.name;

      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";



      res.write("<h1>The weather is currently " + description + "</h1>");
      res.write("<p>The temperature in " + location + " is " + temp + " degrees</p>");
      res.write("<img></img>");
      res.write("<img src=" + imageURL + ">");

      res.send();

    
    });

  });

*/
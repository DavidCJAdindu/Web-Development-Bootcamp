const { response } = require("express");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=manchester&appid=7257ee045cd98983e9a61db0f4013f72&units=metric"; 

  https.get(url, function(response){

    console.log(res.statusCode);

    response.on("data", function(data){

      const weatherData = JSON.parse(data);

      const description = weatherData.weather[0].description;
      const temp = weatherData.main.temp;


      res.write("<h2>The weather is currently</h2>" + description);
      res.write("<p>The temperature in Manchester is " + temp + " degrees</p>");

      res.send();

      

      
      

    });

  });


  


});



app.listen(3000, function(){
  console.log("Running")
});
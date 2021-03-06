
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.use(express.static("public"));

app.post("/", function(req, res){

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  var data = {

    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us7.api.mailchimp.com/3.0/lists/2c4672ab98";

  const options = {
    method: "POST",
    auth: "lavish:88d6429ec332889dca99d44098724c0b-us7"
  }

  const request = https.request(url, options, function(response){

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }


    response.on("data", function(data){
      console.log(JSON.parse(data));
    });


  });

  request.write(jsonData);
  request.end();


});


app.post("/failure", function(req, res) {
  res.redirect("/");
});

// HEROKU PORT or 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Server Running")
});



// api key - 6221e2847ec0b26a0f4cb3e93e9a938a-us7
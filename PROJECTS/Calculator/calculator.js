// require express server
const express = require("express");
const app = express();

// server routes
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


// server listening on port 3000
app.listen(3000, function() {
  console.log("Server Running...")
});

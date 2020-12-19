const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/peopleDB";

mongoose.connect(url, 
{ useUnifiedTopology: true }, { useNewUrlParser: true } );


const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person ({
  name: "John",
  rating: 37,
});

person.save();









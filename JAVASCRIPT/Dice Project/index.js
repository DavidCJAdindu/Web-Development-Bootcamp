// create random number between 1 & 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice6.png then place this image inside the left <img> element.

var randomDiceImage = "dice" + randomNumber1 + ".png"; // create random image name

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";

}
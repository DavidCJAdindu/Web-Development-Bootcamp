// create random number between 1 & 6
var randomNumber1 = Math.floor((Math.random() * 5) + 1);

// Use the random number you created in the last step to pick out a random dice image between dice1.png to dice6.png then place this image inside the left <img> element.

// Hint: You will need to use what you've learnt about the DOM and the method setAttribute() to achieve this.

var image1 = document.getElementsByClassName("img1");

if (randomNumber1 == 1) {
  image1.setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 == 2) {
  image1.setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 == 3) {
  image1.setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 == 4) {
  image1.setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 == 5) {
  image1.setAttribute("src", "images/dice5.png");
}
else {
  image1.setAttribute("src", "images/dice6.png");
}
// Random number for dice function
function getRandomNumber() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 6;
  randomNumber = Math.floor(randomNumber) + 1;

  return randomNumber;
}

// Dedicate random number for both dices

randomNumber1 = getRandomNumber();
randomNumber2 = getRandomNumber();

// Change number on dice for player 1
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Change number on dice for player 2
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText="🚩Player 1 Wins!";
}
else if (randomNumber1< randomNumber2) {
  document.querySelector("h1").innerText="Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerText="It is a draw!";
}

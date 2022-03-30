//random number generator 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Selects random img and places it in img1 class
switch (randomNumber1) {
  case 1:
    var imgSelect = document.querySelector(".img1")
    imgSelect.setAttribute('src', 'images/dice1.png');
    break;
  case 2:
    var imgSelect = document.querySelector(".img1")
    imgSelect.setAttribute('src', 'images/dice2.png');
    break;
  case 3:
    var imgSelect = document.querySelector(".img1")
    imgSelect.setAttribute('src', 'images/dice3.png');
    break;
  case 4:
    var imgSelect = document.querySelector(".img1")
    imgSelect.setAttribute('src', 'images/dice4.png');
    break;
  case 5:
    var imgSelect = document.querySelector(".img1")
    imgSelect.setAttribute('src', 'images/dice5.png');
    break;
  case 6:
    var imgSelect = document.querySelector(".img1")
    imgSelect.setAttribute('src', 'images/dice6.png');
    break;
}
//Selects random img and places it in img2 class
switch (randomNumber2) {
  case 1:
    var imgSelect = document.querySelector(".img2")
    imgSelect.setAttribute('src', 'images/dice1.png');
    break;
  case 2:
    var imgSelect = document.querySelector(".img2")
    imgSelect.setAttribute('src', 'images/dice2.png');
    break;
  case 3:
    var imgSelect = document.querySelector(".img2")
    imgSelect.setAttribute('src', 'images/dice3.png');
    break;
  case 4:
    var imgSelect = document.querySelector(".img2")
    imgSelect.setAttribute('src', 'images/dice4.png');
    break;
  case 5:
    var imgSelect = document.querySelector(".img2")
    imgSelect.setAttribute('src', 'images/dice5.png');
    break;
  case 6:
    var imgSelect = document.querySelector(".img2")
    imgSelect.setAttribute('src', 'images/dice6.png');
    break;
}

//who wins 
if (randomNumber1 > randomNumber2) {
  var h1Select = document.querySelector('h1')
  h1Select.textContent = "🏆Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  var h1Select = document.querySelector('h1')
  h1Select.textContent = "Player 2 Wins!🏆";
} else if (randomNumber1 === randomNumber2) {
  var h1Select = document.querySelector('h1')
  h1Select.textContent = "Draw!";
}

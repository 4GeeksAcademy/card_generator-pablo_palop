import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
// const cardSuit = ["Heart", "Spade", "Club", "Diamond"]
const cardSuit = ["♥", "♠", "♣", "♦"];

window.onload = function () {
  let randomNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuit = Math.floor(Math.random() * cardSuit.length);
  let numberToShow = cardNumber[randomNumber];
  let suitToShow = cardSuit[randomSuit];
  document.getElementById("card-number").textContent = numberToShow;
  document.getElementById("top-suit").textContent = suitToShow;
  document.getElementById("bottom-suit").textContent = suitToShow;

  if (suitToShow === "♥" || suitToShow === "♦") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("bottom-suit").style.color = "red";
    document.getElementById("card-number").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
    document.getElementById("card-number").style.color = "black";
  }
};


const button = document.getElementById("btn")
function generateCard() {
  let randomNumber = Math.floor(Math.random() * cardNumber.length);
  let randomSuit = Math.floor(Math.random() * cardSuit.length);
  let numberToShow = cardNumber[randomNumber];
  let suitToShow = cardSuit[randomSuit];
  document.getElementById("card-number").textContent = numberToShow;
  document.getElementById("top-suit").textContent = suitToShow;
  document.getElementById("bottom-suit").textContent = suitToShow;

  if (suitToShow === "♥" || suitToShow === "♦") {
    document.getElementById("top-suit").style.color = "red";
    document.getElementById("bottom-suit").style.color = "red";
    document.getElementById("card-number").style.color = "red";
  } else {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
    document.getElementById("card-number").style.color = "black";
  }
}
button.addEventListener('click', generateCard);



let intervalId;

function autoGenerate(){
  intervalId = setInterval(generateCard,1000);
}

function stopGenerator(){
  clearInterval(intervalId);
}

document.getElementById("btnStart").addEventListener('click', autoGenerate);
document.getElementById("btnStop").addEventListener('click', stopGenerator);

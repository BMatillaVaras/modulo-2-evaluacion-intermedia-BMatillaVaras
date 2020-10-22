"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);

const button = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const clue = document.querySelector(".js-clue");
const meter = document.querySelector(".js-meter");
let attempt = 0;

function inner(text) {
  return (clue.innerHTML = text);
}

function proofClick() {
  const inputValue = parseInt(input.value);
  console.log(inputValue);
  if (inputValue > random && inputValue <= 100) {
    inner("Demasiado alto.");
  } else if (inputValue < random && inputValue >= 1) {
    inner("Demasiado bajo.");
  } else if (inputValue === random) {
    inner("Has ganado campeona!!!");
    button.removeEventListener("click", proofClick);
  } else {
    inner("El número debe estar entre 1 y 100");
  }
}

function counter() {
  attempt++;
  meter.innerHTML = "Número de intentos: " + attempt;
}
function handler() {
  proofClick();
  counter();
}
button.addEventListener("click", handler);

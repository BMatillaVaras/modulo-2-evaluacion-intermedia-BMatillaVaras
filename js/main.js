'use strict';

const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const meter = document.querySelector('.js-meter');
let attempt = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
console.log(random);

function proofClick (){
  const inputValue = parseInt(input.value);
  console.log(inputValue);
  attempt++;
  meter.innerHTML = 'Número de intentos: ' + attempt;
  if (inputValue > random && inputValue <= 100) {
    clue.innerHTML = 'Demasiado alto.';
  } else if (inputValue < random && inputValue >=1) {
    clue.innerHTML = 'Demasiado bajo.';
  } else if (inputValue === random) {
    clue.innerHTML = 'Has ganado campeona!!!';
    button.removeEventListener('click', proofClick);
  } else {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }
}

button.addEventListener('click', proofClick);


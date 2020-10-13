'use strict';

const button = document.querySelector('.js-button');
const input = document.querySelector('.js-input');
const clue = document.querySelector('.js-clue');
const meter = document.querySelector('.js-meter');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
console.log(random);

function proofClick (){
  const inputValue = input.value;
  const inputNum = parseInt.inputValue;
  console.log(inputValue);
  if (inputValue == random) {
    clue.innerHTML = 'Has ganado campeona!!!';
  } else if (inputValue < random && inputValue >=1) {
    clue.innerHTML = 'Demasiado bajo.';
  } else if (inputValue > random && inputValue <= 100) {
    clue.innerHTML = 'Demasiado alto.';
  } else {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }

}


button.addEventListener('click', proofClick);
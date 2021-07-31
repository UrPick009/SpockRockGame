import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScroreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerSpock = document.getElementById('playerSpock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');

const computerRock = document.getElementById('computerRock');
const computerSpock = document.getElementById('computerSpock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

//Reset 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

//Reset score
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScroreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

//Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'spock';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'scissors';
  }
}

//Add 'selected' for computerChoice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    default:
      break;
  }
}

//Show the results
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      startConfetti();
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScroreEl.textContent = computerScoreNumber;
    }
  }

}

//Call func to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

//player selection value and styling icons
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    default:
      break;
  }
}
window.select = select;

resetAll();
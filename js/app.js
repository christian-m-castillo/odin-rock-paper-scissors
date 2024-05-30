console.log('welcome to the game!');

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const choiceArray = ['rock', 'paper', 'scissors'];
  const computerChoice = choiceArray[randomNumber];
  return computerChoice;
}

function getHumanChoice() {
  const humanInput = parseInt(prompt('rock, paper, or scissors? Enter 0 for rock, 1 for paper, 2 for scissors.'));
  const choiceArray = ['rock', 'paper', 'scissors'];
  const humanChoice = choiceArray[humanInput];
  return humanChoice;
}

console.log(`computer choice is ${getComputerChoice()}`);
console.log(`human choice is ${getHumanChoice()}`);
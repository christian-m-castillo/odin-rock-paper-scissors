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


let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  let roundEvalMessage;
  switch (humanChoice) {
    case 'rock': 
      if (computerChoice == 'rock') {
        roundEvalMessage = 'Tie!';
        return roundEvalMessage;
      } else if (computerChoice == 'paper') {
        roundEvalMessage = 'Paper covers rock: you lose!';
        computerScore++;
        return roundEvalMessage;
      } else if (computerChoice == 'scissors') {
        roundEvalMessage = 'Rock smashes scissors: you win!';
        humanScore++;
        return roundEvalMessage;
      }
    case 'paper': 
      if (computerChoice == 'rock') {
        roundEvalMessage = 'Paper covers rock: you win!';
        humanScore++;
        return roundEvalMessage;
      } else if (computerChoice == 'paper') {
        roundEvalMessage = 'Tie!';
        return roundEvalMessage;
      } else if (computerChoice == 'scissors') {
        roundEvalMessage == 'Scissors cuts paper: you lose!';
        computerChoice++;
      }
    case 'scissors':
      if (computerChoice == 'rock') {
        roundEvalMessage = 'Rock smashes scissors: you lose!';
        computerScore++;
        return roundEvalMessage;
      } else if (computerChoice == 'paper') {
        roundEvalMessage = 'Scissors cuts paper: you win!';
        humanScore++;
        return roundEvalMessage;
      } else if (computerChoice == 'scissors') {
        roundEvalMessage = 'Tie!';
        return roundEvalMessage;
      }
  } 
}
playRound();
// Round 1
getHumanChoice();
let result = playRound(getHumanChoice(), getComputerChoice());
console.log(result);
console.log(`Your score: ${humanScore}, computer score: ${computerScore}`);
//Round 2

alert('Welcome to rock, paper, scissors!');
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choiceArray = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoice = choiceArray[randomNumber];
  return computerChoice;
}

function getHumanChoice() {
  const choiceArray = ['rock', 'paper', 'scissors'];
  const humanInput = parseInt(prompt('Rock, paper, or scissors? Enter 0 for rock, 1 for paper, 2 for scissors.'));
  const humanChoice = choiceArray[humanInput];
  return humanChoice;
}


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
/*
// Round 1
getHumanChoice();
playRound();
let result = playRound(getHumanChoice(), getComputerChoice());
alert(result);
alert(`Your score: ${humanScore}, computer score: ${computerScore}`);

FIVE ROUND LOGIC

//Round 2
getHumanChoice();
playRound();
result = playRound(getHumanChoice(), getComputerChoice());
alert(result);
alert(`Your score: ${humanScore}, computer score: ${computerScore}`);

//Round 3
getHumanChoice();
playRound();
result = playRound(getHumanChoice(), getComputerChoice());
alert(result);
alert(`Your score: ${humanScore}, computer score: ${computerScore}`);

//Round 4
getHumanChoice();
playRound();
result = playRound(getHumanChoice(), getComputerChoice());
alert(result);
alert(`Your score: ${humanScore}, computer score: ${computerScore}`);

//Round 5
getHumanChoice();
playRound();
result = playRound(getHumanChoice(), getComputerChoice());
alert(result);
alert(`Your score: ${humanScore}, computer score: ${computerScore}`);


//Evaluate winner
function evaluateWinner() {
  if (humanScore === computerScore) {
    alert('Tie!');
  } else if (humanScore > computerScore) {
    alert('Congratualions: You Win!')
  } else {
    alert('Sorry: You Lose!');
  }
  

  //Write code to let user choose to play again
}

evaluateWinner();
*/
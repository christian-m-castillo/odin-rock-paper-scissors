document.addEventListener('DOMContentLoaded', () => {

  const resultsDisplay = document.querySelector('#resultsDisplay');
  const scoreDisplay = document.querySelector('#scoreDisplay');
  const rockButton = document.querySelector('#rockButton');
  const paperButton = document.querySelector('#paperButton');
  const scissorsButton = document.querySelector('#scissorsButton');
  const playAgainButton = document.querySelector('#playAgainButton');

  

  let humanChoice;
  let roundEvalMessage;
  let computerScore = 0;
  let humanScore = 0;
  let name;

  greet();
  playRound();
  
  function greet() {
    name = prompt('What is your name?');
    if (!name) {
      resultsDisplay.innerHTML = `<div class="greeting">Welcome friend!</div>
    <div class="invitation">Let's play rock, paper, scissors.</div>`;
    } else {
    resultsDisplay.innerHTML = `<div class="greeting">Welcome <span class="name">${name}</span>!</div>
    <div class="invitation">Let's play rock, paper, scissors.</div>`;
    }
    updateScore();
  }

  function playRound() {
    rockButton.addEventListener('click', () => handleChoice('rock'));
    paperButton.addEventListener('click', () => handleChoice('paper'));
    scissorsButton.addEventListener('click', () => handleChoice('scissors'));
  }

  function handleChoice(choice) {
    humanChoice = choice;
    const computerChoice = getComputerChoice();
    evalRound(humanChoice, computerChoice);
    updateResults(humanChoice, computerChoice, roundEvalMessage);
    updateScore();
    if (humanScore === 5 || computerScore === 5) {
      evaluateWinner();
    }
  }

  function getComputerChoice() {
    const choiceArray = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choiceArray[randomNumber];
  }

  function evalRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundEvalMessage = 'It\'s a Tie! Select again.';
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      roundEvalMessage = `You chose ${humanChoice} and the computer chose ${computerChoice}. You win this round! Select again.`;
      humanScore++;
    } else {
      roundEvalMessage = `You chose ${humanChoice} and the computer chose ${computerChoice}. You lose this round! Select again.`;
      computerScore++;
    }
  }

  function updateResults(humanChoice, computerChoice, roundEvalMessage) {
    resultsDisplay.innerHTML = `
      <div>${roundEvalMessage}</div>`;
  }

  function updateScore() {
    scoreDisplay.innerHTML = `Score- ${name || 'Player'}: ${humanScore}, Computer: ${computerScore}`;
  }

  function evaluateWinner() {
    let finalMessage;
    if (humanScore > computerScore) {
      finalMessage = `Congratulations ${name || 'Player'}, you win the game!`;
    } else {
      finalMessage = `Sorry ${name || 'Player'}, you lost the game. Try again!`;
    }
    alert(finalMessage);
    playAgainButton.style.display = 'block';
    playAgainButton.addEventListener('click', () => location.reload());
  }
});
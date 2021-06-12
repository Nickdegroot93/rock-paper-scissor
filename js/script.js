let game = true;
let draws = 0;
let wins = 0;
let losses = 0;

// DOM
const choiceButtons = document.querySelectorAll(`div[data-choice]`);
const resultText = document.getElementById("result-box-text");
const resultNumber = document.getElementById("result-box-number");
const resetButton = document.getElementById("reset-btn");

// Computer chooses rock, paper or scissor
function computerPlay() {
    let gameChoices = ['rock', 'paper', 'scissor']
    return gameChoices[Math.floor(Math.random() *3)];
}

// Reset current game
function gameReset() {
    resultText.innerHTML = `Game has been reset`;
    game = true;
    draws = 0;
    wins = 0;
    losses = 0;
    resultNumber.innerHTML = `Wins: ${wins} - Losses: ${losses} - Draws: ${draws}`
}


// Check for win, loss or draw
function playRound(a, b) {
    if (a === b) {
        resultText.innerHTML = `You chose ${userSelection}, the computer chose ${computerSelection}, it's a draw.`
        draws++;
    }
    else if (a === 'rock' && b === 'scissor') {
        resultText.innerHTML = `You chose ${userSelection}, the computer chose ${computerSelection}, you win!`
        wins++;
    }
    else if (a === 'paper' && b === 'rock') {
        resultText.innerHTML = `You chose ${userSelection}, the computer chose ${computerSelection}, you win!`
        wins++;
    } 
    else if (a === 'scissor' && b === 'paper') {
        resultText.innerHTML = `You chose ${userSelection}, the computer chose ${computerSelection}, you win!`
        wins++;
    }
    else {
        resultText.innerHTML = `You chose ${userSelection}, the computer chose ${computerSelection}, you lose!`
        losses++;
    }
}


resetButton.addEventListener("click", gameReset);

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {

    if (event.target.innerText == "Rock") {
        userSelection = "rock";
    }
    else if (event.target.innerText == "Paper") {
        userSelection = "paper";
    }
    else if (event.target.innerText == "Scissor") {
        userSelection = "scissor";
    }

    computerSelection = computerPlay();
    playRound(userSelection, computerSelection);
    resultNumber.innerHTML = `Wins: ${wins} - Losses: ${losses} - Draws: ${draws}`
    
  });
});
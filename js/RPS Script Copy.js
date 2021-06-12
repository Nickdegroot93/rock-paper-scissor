let game = false;
let draws = 0;
let wins = 0;
let losses = 0;
let setWins = 0;
let setLosses = 0;

function gameReset() {
    game = true;
    draws = 0;
    wins = 0;
    losses = 0;
}

function fullReset() {
    gameReset();
    setWins = 0;
    setLosses = 0;
}


// Function prompts user with an input, returns the input.
function userPlay() {
    let userChoice = prompt("Choose rock, paper or scissor.");
    return userChoice;
}

// Function randomly generates a value which is either rock, paper or scissor, returns value.
function computerPlay() {
    let gameChoices = ['rock', 'paper', 'scissor']
    return gameChoices[Math.floor(Math.random() *3)];
}

// Function compares both inputs and decides on a win, loss or draw.
function playRound(a, b) {
    if (a === b) {
        console.log('Draw!')
        draws++;
    }
    else if (a === 'rock' && b === 'scissor') {
        console.log('You win!')
        wins++;
    }
    else if (a === 'paper' && b === 'rock') {
        console.log('You win!')
        wins++;
    } 
    else if (a === 'scissor' && b === 'paper') {
        console.log('You win!')
        wins++;
    }
    else {
        console.log('You lose')
        losses++;
    }
}

// Code runs while game = true, and wins/losses haven't exceeded 3. (a set is won at this point.)
while (game && wins < 3 && losses < 3){

// User picks rock, paper or scissor
let userSelection = userPlay();

// If user clicks cancel, the game ends
    if (userSelection === null) {
        game = false;
        console.log('Game has ended')}

// If user enters anything but rock, paper or scissor, prompts for input again
    else if (userSelection.toLowerCase() !== 'rock' && userSelection.toLowerCase() 
            !== 'paper' && userSelection.toLowerCase() !== 'scissor')   
            {
                console.log('Please enter either rock, paper or scissor.')
    }

// If input is correct, continue the game
    else {
        userSelection = userSelection.toLowerCase();
        const computerSelection = computerPlay();

        console.log(`You have selected ${userSelection}, the computer has selecter ${computerSelection}.`)

        playRound(userSelection, computerSelection);
        console.log(`You have ${wins} wins, ${losses} losses and ${draws} draws. (Sets: ${setWins} wins / ${setLosses} losses)`)
    }

// if either wins or losses are 3, a set is won or lost and the score resets. (set score stays)
    if (wins === 3) {
        console.log("You've hit 3 wins, you win this set");
        setWins++;
        gameReset()
    } else if (losses === 3) {
        console.log("You've hit 3 losses, you lose this set");
        setLosses++;
        gameReset()
    }
}






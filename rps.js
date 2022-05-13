function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0: 
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function capitalizeFirstLetter(str) {
    let newStr = str.trim();
    let newStr1 = newStr[0].toUpperCase() + newStr.slice(1).toLowerCase();
    return newStr1;
}

function playRound(playerSelection, computerSelection) {
    let victory;
    playerSelectionFix = capitalizeFirstLetter(playerSelection);
    switch (true) {
        case playerSelectionFix === 'Rock' && computerSelection === 'Scissors':
        case playerSelectionFix === 'Paper' && computerSelection === 'Rock':
        case playerSelectionFix === 'Scissors' && computerSelection === 'Paper':
            victory = true;
            return victory;
        case playerSelectionFix === 'Rock' && computerSelection === 'Paper':
        case playerSelectionFix === 'Paper' && computerSelection === 'Scissors':
        case playerSelectionFix === 'Scissors' && computerSelection === 'Rock':
            victory = false;
            return victory;
        case playerSelectionFix === computerSelection:
            return 'Draw!'
    }
}

function game(){
    //create vars for playerWins = 0, computerWins = 0, score, finalScore
    let playerWins = 0;
    let computerWins = 0;
    let score;
    let finalScore;
    //create a for loop that plays 5 rounds
    for (let i = 0; i<5; i++) {
        //creat a var for playerSelection and take players input with a prompt
        let playerSelection = prompt("Please type Rock, Paper, or Scissors", ' ');
        let computerSelection = computerPlay();
        let pSelFix = capitalizeFirstLetter(playerSelection);
        //run playRound using playerSelection computerPlay for computerSelection
        let won = playRound(pSelFix, computerSelection);
        //if victory is true, log a message to the console and increment playerWins by 1
        //if victory is fails, log a message to the console and increment computerWins by 1
        //if playRound returns 'Draw', log a message and do nothing else
        if (won === 'Draw!') {
            console.log('Draw!');
        }   else if (won) {
                console.log(`You win! ${pSelFix} beats ${computerSelection}.`);
                playerWins++;
        }   else {
                console.log(`You lose! ${computerSelection} beats ${pSelFix}.`);
                computerWins++;
        }
        //store a string in score that says 'SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}'
        score = `SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}`;
        //log score to the console
        console.log(score);
        //restart loop
    }

    //after 5 rounds have been played, store a string in finalScore that states 'FINAL SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}'
    finalScore = `FINAL SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}`
    console.log(finalScore);
    //if playerWins = computerWins, log a message to the console stating 'Draw!'
    //if playerWins > computerWins, log a message to the console stating 'You won! Congrats!'
    //if playerWins < computerWins, log a message to the console stating 'You lose! Better luck next time!'
    if (playerWins === computerWins) {
        console.log('Draw!');
    } else if (playerWins > computerWins) {
            console.log('You won! Congrats!');
    } else {
            console.log('You lose! Better luck next time!');
    }
}

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
    if (!!str) {
      return null;
    }
    let newStr = str.trim();
    let newStr1 = newStr[0].toUpperCase() + newStr.slice(1).toLowerCase();
    return newStr1;
}

function playRound(playerSelection, computerSelection) {
    let victory;
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
    //create a for game that plays 5 rounds
    for (let i = 0; i<5; i++) {
        //create a var for playerSelection and take players input with a prompt
        let playerSelection = prompt("Please type Rock, Paper, or Scissors. Enter nothing to quit.", ' ');
        //create a condition for handling null inputs
        console.log(playerSelection)
        if (playerSelection === null) {
            alert('Goodbye');
            return;
        }
        let pSelFix = capitalizeFirstLetter(playerSelection);
        //create a condition for handling incorrect inputs
        if (pSelFix != 'Rock' || pSelFix != 'Scissors' || pSelFix != 'Paper'|| !!pSelFix) {
            alert('Incorrect input.');
            playerSelection = prompt("Please type Rock, Paper, or Scissors. Enter nothing to quit.", ' ');
            pSelFix = capitalizeFirstLetter(playerSelection);
        }
        if (pSelFix != 'Rock' || pSelFix != 'Scissors' || pSelFix != 'Paper'|| !!pSelFix) {
            alert('You entered another incorrect input. Ending game. Get your shit together.')
            return;
        }
        let computerSelection = computerPlay();
        //run playRound using playerSelection computerPlay for computerSelection
        let won = playRound(pSelFix, computerSelection);
        //if victory is true, log a message to the console and increment playerWins by 1
        //if victory is fails, log a message to the console and increment computerWins by 1
        //if playRound returns 'Draw', log a message and do nothing else
        if (won === 'Draw!') {
            alert('Draw!');
        }   else if (won) {
                alert(`You win! ${pSelFix} beats ${computerSelection}.`);
                playerWins++;
        }   else {
                alert(`You lose! ${computerSelection} beats ${pSelFix}.`);
                computerWins++;
        }
        //store a string in score that says 'SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}'
        score = `SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}`;
        //log score to the console
        alert(score);
        //restart game
    }

    //after 5 rounds have been played, store a string in finalScore that states 'FINAL SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}'
    finalScore = `FINAL SCORE: Player wins: ${playerWins} Computer wins: ${computerWins}`
    alert(finalScore);
    //if playerWins = computerWins, log a message to the console stating 'Draw!'
    //if playerWins > computerWins, log a message to the console stating 'You won! Congrats!'
    //if playerWins < computerWins, log a message to the console stating 'You lose! Better luck next time!'
    if (playerWins === computerWins) {
        alert('Draw!');
    } else if (playerWins > computerWins) {
            alert('You won! Congrats!');
    } else {
            alert('You lose! Better luck next time!');
    }
}

/* game() will start a new game when new game button is pressed
Global vars:
winner - string that updates stating the winner of each round, to be used to display results; defaults to 'CHOOSE' on game start
pWins - tracks player wins
cWins - tracks computer wins
score - string that displays overall score. updates after each round. is reset when game() is ran.
gameOver - a boolean that is true if either player or comp wins = 5.
finalWinner - string that displays overall winner, used to display final victory message.

Basic flow:
On click of newgame button, run game().
game() sets pWins and cWins to 0, set winner to 'CHOOSE' and score to a defualt value, and gameOver to false
While gameOver is false:
    displayWinner() displays the 'CHOOSE' message in results div.
    When the player clicks a button, run playRound() using the button choice as the player selection
    playRound() will run updateWinner(), updateScore(), displayWinner(), and displayScore() during its execution
    to update the global vars and then display them in their corresponding elements
    Finally, playRound() will call updateGameOver()
When gameOver is true, the while loop will finish, and updateFinalWinner() will set winner to a final victory message.
displayFinalWinnner() will display final victory message in results element
*/

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

function updateGameOver(pWins, cWins) {
    if (pWins = 5 || cWins = 5) {
        gameOver = true
        return;
    }
}

function updateWinner() {
    if (victory) {
        winner = 'PLAYER';
        return pWins++;
    } else if (!victory) {
        winner = 'COMPUTER';
        return cWins++;
    } else if (victory = 'Draw') {
        winner = 'Draw'
        return;
    }
}



let winner = 'CHOOSE'
let pWins = 0;
let cWins = 0;
let score = `PLAYER SCORE: ${pWins} || COMPUTER SCORE: ${cWins}`;
let gameOver = false;
let finalWinner;

const scoreCard = element.querySelector(.score);
scoreCard.textContent = score;

function game(){



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

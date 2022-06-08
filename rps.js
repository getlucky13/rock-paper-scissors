let winner;
let pWins = 0;
let cWins = 0;
let score = `PLAYER SCORE: ${pWins} || COMPUTER SCORE: ${cWins}`;
let gameOver;
let finalWinner;

const scoreCard = document.querySelector('.score');
scoreCard.textContent = score;

const resultsCard = document.querySelector('.results');
resultsCard.textContent = winner;

const rockBtn = document.querySelector('#b1');
const paperBtn = document.querySelector('#b2');
const scissorsBtn = document.querySelector('#b3');

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
        case playerSelection === 'Rock' && computerSelection === 'Scissors':
        case playerSelection === 'Paper' && computerSelection === 'Rock':
        case playerSelection === 'Scissors' && computerSelection === 'Paper':
            victory = true;
            return victory;
        case playerSelection === 'Rock' && computerSelection === 'Paper':
        case playerSelection === 'Paper' && computerSelection === 'Scissors':
        case playerSelection === 'Scissors' && computerSelection === 'Rock':
            victory = false;
            return victory;
        case playerSelection === computerSelection:
            return 'Draw!';
    }
    updateWinner(victory);
    updateGameOver(pWins, cWins);
}

function updateGameOver(pWins, cWins) {
    if (pWins == 5 || cWins == 5) {
        gameOver = true;
        return;
    } else {
        gameOver = false;
        return;
    }
}

function updateWinner(victory) {
    if (victory) {
        winner = 'PLAYER WINS';
        return pWins++;
    } else if (!victory) {
        winner = 'COMPUTER WINS';
        return cWins++;
    } else if (victory === 'Draw') {
        winner = 'Draw'
        return;
    }
}

function newGame(){
    pWins = 0;
    cWins = 0; 
    winner = 'CHOOSE';
    gameOver = false;
    resultsCard.textContent = winner;
}

const newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);

function getPlayerChoice(e) {
    let playerSelection = (e.target.textContent);
    playRound(playerSelection, computerPlay());
  }


/* game() will start a new game when new game button is pressed
Global vars:
winner - string that updates stating the winner of each round, to be used to display results; defaults to 'CHOOSE' on game start
pWins - tracks player wins
cWins - tracks computer wins
score - string that displays overall score. updates after each round. is reset when game() is ran.
gameOver - a boolean that is true if either player or comp wins = 5.
finalWinner - string that displays overall winner, used to display final victory message.

Originally intended to contain the entire gameplay in a game() function. No longer think that is best. 
After reviewing some projects, simplest way to fix what I have would be to set an event listener on each button that runs getPlayerChoice.
At the end of play round, use a function to check if the game is over and a winner has been determined. 
Use a final function to display final results.
Can have new game either use location.reload to reload the page, or could make a function to reset all values to default. 

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}

Borrow from another project. May be useful for taking button clicking input. 

*/


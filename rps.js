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

function playRoundRock() {
    updateWinner(playRound('Rock', computerPlay()));
    updateGameOver(pWins, cWins);
}

function playRoundPaper() {
    updateWinner(playRound('Paper', computerPlay()));
    updateGameOver(pWins, cWins);
}

function playRoundScissors() {
    updateWinner(playRound('Scissors', computerPlay()));
    updateGameOver(pWins, cWins); 
}

function game(){
    pWins = 0;
    cWins = 0; 
    winner = 'CHOOSE';
    gameOver = false;
    resultsCard.textContent = winner;
    
    while(!gameOver) {
    rockBtn.addEventListener('click', playRoundRock); 
    paperBtn.addEventListener('click', playRoundPaper);
    scissorsBtn.addEventListener('click', playRoundScissors);
    }

    finalWinner = `GAME OVER. ${winner}`;
    resultsCard.textContent = finalWinner;
}

const newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', game);


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
    When the player clicks a button, run updateWinner with playRound as the arg, and the button chosen as playerSelection, and computerPlay as computerSelection.
    to update the global vars and then display them in their corresponding elements
    Finally, playRound() will call updateGameOver()
When gameOver is true, the while loop will finish, and updateFinalWinner() will set winner to a final victory message.
displayFinalWinnner() will display final victory message in results element
*/

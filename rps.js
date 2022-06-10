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

const choiceBtns = document.querySelectorAll('div.choiceBtns button');
choiceBtns.forEach(button => { button.addEventListener('click', getPlayerChoice) });

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0: 
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let victory;
    switch (true) {
        case playerSelection == 'rock' && computerSelection == 'scissors':
        case playerSelection == 'paper' && computerSelection == 'rock':
        case playerSelection == 'scissors' && computerSelection == 'paper':
            victory = true;
            pWins++;
            break;
        case playerSelection == 'rock' && computerSelection == 'paper':
        case playerSelection == 'paper' && computerSelection == 'scissors':
        case playerSelection == 'scissors' && computerSelection == 'rock':
            victory = false;
            cWins++;
            break;
        case playerSelection == computerSelection:
            victory = 'Draw!';
            break;
    }
    score = `PLAYER SCORE: ${pWins} || COMPUTER SCORE: ${cWins}`;
    scoreCard.textContent = score;
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
        resultsCard.textContent = winner;
        return;
    } else if (!victory) {
        winner = 'COMPUTER WINS';
        resultsCard.textContent = winner;
        return;
    } else if (victory == 'Draw') {
        winner = 'DRAW';
        resultsCard.textContent = winner;
        return;
    }
}

function newGame(){
    pWins = 0;
    cWins = 0; 
    winner = 'CHOOSE';
    gameOver = false;
    score = `PLAYER SCORE: ${pWins} || COMPUTER SCORE: ${cWins}`;
    scoreCard.textContent = score;
    resultsCard.textContent = winner;
}

const newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);

function getPlayerChoice(e) {
    let playerChoice = (e.target.textContent);
    let playerSelection = playerChoice.trim().toLowerCase();
    playRound(playerSelection, computerPlay());
  }


/* 
Existing functions work as expected. Game plays through without an end. Now need to display finalScore when gameOver is true and remove ability for player input
*/


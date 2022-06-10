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
        case playerSelection === 'rock' && computerSelection === 'scissors':
        case playerSelection === 'paper' && computerSelection === 'rock':
        case playerSelection === 'scissors' && computerSelection === 'paper':
            victory = true;
        case playerSelection === 'rock' && computerSelection === 'paper':
        case playerSelection === 'paper' && computerSelection === 'scissors':
        case playerSelection === 'scissors' && computerSelection === 'rock':
            victory = false;
        case playerSelection === computerSelection:
            victory = 'Draw!';
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
    console.log(' newGame worked');
}

const newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);

function getPlayerChoice(e) {
    let playerChoice = (e.target.textContent);
    let playerSelection = playerChoice.trim().toLowerCase();
    playRound(playerSelection, computerPlay());
  }


/* 
playRound is only returning draw. Inputs are being registered correctly. 
*/


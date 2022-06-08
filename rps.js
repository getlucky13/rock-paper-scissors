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
    console.log(' newGame worked');
}

const newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);

function getPlayerChoice(e) {
    console.log(e);
    let playerSelection = (e.target.textContent);
    playRound(playerSelection, computerPlay());
  }


/* 
getPlayerChoice isnt properly executing, I think because the textContent it's pulling isn't working as an arg for playRound. 
Could maybe change playRound to work with the lower case button ids and use those as playerSelection. Testing still required.
*/


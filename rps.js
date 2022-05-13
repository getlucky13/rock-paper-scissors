function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0: 
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function capitalizeFirstLetter(str) {
    str.trim();
    let newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return newStr;
}

function playRound(playerSelection, computerSelection) {
    let victory;
    playerSelectionFix = capitalizeFirstLetter(playerSelection);
    switch (true) {
        case playerSelectionFix === 'Rock' && computerSelection === 'Scissors':
        case playerSelectionFix === 'Paper' && computerSelection === 'Rock':
        case playerSelectionFix === 'Scissors' && computerSelection === 'Paper':
            victory = true;
            break;
        case playerSelectionFix === 'Rock' && computerSelection === 'Paper':
        case playerSelectionFix === 'Paper' && computerSelection === 'Scissors':
        case playerSelectionFix === 'Scissors' && computerSelection === 'Rock':
            victory = false;
            break;
    }
    if (playerSelectionFix === computerSelection){
        return 'Draw!'
    } else if (victory) {
        return `You won! ${playerSelectionFix} beats ${computerSelection}`;
    }
    else {
        return `You lost! ${computerSelection} beats ${playerSelectionFix}`;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
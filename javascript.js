const choices = ["Rock", "Paper", "Scissors"]
const playerButton = document.querySelectorAll('.playerselection .playerchoice');
const roundNumber = document.querySelector('.roundcount .number');
const playerChose = document.querySelector('.playerchose i')
const computerChose = document.querySelector('.computerchose i')
const roundResult = document.querySelector('.roundresult')
const paperClass = 'fa-regular fa-hand';
const rockClass = 'fa-regular fa-hand-back-fist';
const scissorsClass = 'fa-regular fa-hand-scissors';
const displayedPlayerScore = document.querySelector('.playerscore .number');
const displayedComputerScore = document.querySelector('.computerscore .number');
const scoreboard = document.querySelector('.scoreboard');


let playerScore = 0;
let computerScore = 0;

displayedPlayerScore.textContent = playerScore;
displayedComputerScore.textContent = computerScore;

function getComputerChoice() {
    /* Function to Get Computer's Choice of Rock, Paper, or Scissors */

    let computerChoice = Math.floor(Math.random() * choices.length); //get random number between 0 and length of choices array
    switch (computerChoice) {
        case 0:
            computerChose.setAttribute('class', rockClass);
            break;
        case 1:
            computerChose.setAttribute('class', paperClass);
            break;
        case 2:
            computerChose.setAttribute('class', scissorsClass);
            break;
    }

    return choices[computerChoice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = '';

    if (playerSelection === computerSelection) { // Draw conditions: player selection === computer selection
        result = 'draw';
        updateScore();
        roundResult.textContent = 'It\'s a tie!';
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||  // Losing conditions: computer beats paper
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {

        result = 'computer';
        computerScore++;
        updateScore();
        roundResult.textContent = 'The computer wins this round...';

    }

    else { // Win conditions
        result = 'player';
        playerScore++;
        updateScore();
        roundResult.textContent = 'You won the round!';
    }

    return result;
}

function updateScore(){
    displayedPlayerScore.textContent = playerScore;
    displayedComputerScore.textContent = computerScore;
}
function gameOver(){
    // document.location.reload();
}

function game() {

    /*  game() function = 
            play 5 rounds of RPS
            keep score
            declare winner
            ask to play again at end of round
    */

    let wantToPlay = true; //only play if player wants to play; assume true at start
    let currentRound = 1;



    let computerSelection = '';
    let playerSelection = '';
    /***************************
     *  Button listeners
     ***************************/
    playerButton.forEach(button => {
        button.addEventListener('click', () => {
            roundNumber.textContent = currentRound;
            playerSelection = button.getAttribute('id');
            let chosenClass = button.firstChild.getAttribute('class');
            playerChose.setAttribute('class', chosenClass);
            playRound(playerSelection, getComputerChoice());
            currentRound++;
            if (currentRound >= 6){
                gameOver();
            }

        });

    });

}


game();
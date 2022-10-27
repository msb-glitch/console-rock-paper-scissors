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
        computerChose.classList.toggle('tie');
        playerChose.classList.toggle('tie');
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||  // Losing conditions: computer beats paper
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {

        result = 'computer';
        computerScore++;
        updateScore();
        roundResult.textContent = 'The computer wins this round...';
        computerChose.classList.toggle('winner');
        playerChose.classList.toggle('loser');
    }

    else { // Win conditions
        result = 'player';
        playerScore++;
        updateScore();
        roundResult.textContent = 'You won the round!';
        computerChose.classList.toggle('loser');
        playerChose.classList.toggle('winner');
    }

    return result;
}

function updateScore() {
    displayedPlayerScore.textContent = playerScore;
    displayedComputerScore.textContent = computerScore;
}
function gameOver() {
    // to do: add reset button document.location.reload();
    // to do: add smiley face or frowny face when win or lose

    //display winner
    if (computerScore > playerScore) {
        document.querySelector('.scoreboard h2').textContent = 'The computer won this time...';
       
    }
    else if (playerScore > computerScore) {
        document.querySelector('.scoreboard h2').textContent = 'You win!!!';
        
    }
    else {
        document.querySelector('.scoreboard h2').textContent = 'It\'s a draw.';
        
    }

    //disable player choices
    playerButton.forEach(button => {
        button.classList.toggle('disabled')
    })
}

function game() {

    /*  game() function = 
            play 5 rounds of RPS
            keep score
            declare winner
            
            todo:
            ask to play again at end of round
    */


    let currentRound = 1;
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
            if (currentRound >= 6) {
                gameOver();
            }

        });

    });

}


game();
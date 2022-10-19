const choices = ["Rock", "Paper", "Scissors"]
const playerButton = document.querySelectorAll('button');

let computerSelection = getComputerChoice();
let playerSelection = '';

/***************************
 * Button listeners
 ***************************/
playerButton.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id');
        console.log(playRound(playerSelection,getComputerChoice()));
    });
    
})





function getComputerChoice() {
    /* Function to Get Computer's Choice of Rock, Paper, or Scissors */

    let computerChoice = Math.floor(Math.random() * choices.length); //get random number between 0 and length of choices array
    return choices[computerChoice];
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = '';

    if (playerSelection === computerSelection) { // Draw conditions: player selection === computer selection
        result = 'draw';
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||  // Losing conditions: computer beats paper
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {

        result = 'computer';

    }

    else { // Win conditions
        result = 'player';
    }
    return result;
}

function game() {

    /*  game() function = 
            play 5 rounds of RPS
            keep score
            declare winner
            ask to play again at end of round
    */

    let wantToPlay = true; //only play if player wants to play; assume true at start
    let roundNumber = 1;
    let playerScore = 0;
    let computerScore = 0;



}


game();
const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    /* Function to Get Computer's Choice of Rock, Paper, or Scissors */

    let computerChoice = Math.floor(Math.random() * choices.length); //get random number between 0 and length of choices array
    return choices[computerChoice];
}



const computerSelection = getComputerChoice();
const playerSelection = prompt("Please choose: Rock, Paper, Scissors");


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = '';
    
    if (playerSelection === computerSelection) { // Draw conditions: player selection === computer selection
        result = `P: ${playerSelection} === C: ${computerSelection} -> Draw`;
    }
    
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||  // Losing conditions: computer beats paper
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {

        result = `P: ${playerSelection} <> C: ${computerSelection} -> You lose`;

    }
    
    else { // Win conditions
        result = `P: ${playerSelection} <> C: ${computerSelection} -> You win`;
    }
    return result;
}

console.log(playRound(playerSelection, computerSelection));
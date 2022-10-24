const choices = ["Rock", "Paper", "Scissors"]
const playerButton = document.querySelectorAll('.playerselection .playerchoice');
const roundNumber = document.querySelector('.roundcount .number');
const playerChose = document.querySelector('.playerchose i')
const computerChose = document.querySelector('.computerchose i')
const roundResult = document.querySelector('.roundresult')




let computerSelection = '';
let playerSelection = '';

/***************************
 * Button listeners
 ***************************/
playerButton.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.getAttribute('id');
        let chosenClass = button.firstChild.getAttribute('class');
        playerChose.setAttribute('class', chosenClass);
        
        console.log(playRound(playerSelection,getComputerChoice()));
    });
    
});





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
        roundResult.textContent='It\'s a tie!';
    }

    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||  // Losing conditions: computer beats paper
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')) {

        result = 'computer';
        roundResult.textContent='The computer wins this round...';

    }

    else { // Win conditions
        result = 'player';
        roundResult.textContent = 'You won the round!';
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
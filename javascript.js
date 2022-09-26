const choices = ["Rock", "Paper", "Scissors"]

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

    while (wantToPlay) {

        /********************** */
        /*play 5 rounds of game */
        /********************** */
        
        for (roundNumber; roundNumber <= 5; roundNumber++) {
            const computerSelection = getComputerChoice();
            const playerSelection = prompt("Please choose: Rock, Paper, Scissors");

            let gameResult = playRound(playerSelection, computerSelection);

            if (gameResult === 'player') { // player wins
                playerScore += 1;
            }
            else if (gameResult === 'computer') { // computer wins
                computerScore += 1;
            }
            else { } // draw

            console.log(`P: ${playerSelection}\tC: ${computerSelection}`); // print player and computer selections
            
            console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`); // print player and computer scores
        }


        /************************************* */
        /* check scores for end of game result */
        /************************************* */

        if (playerScore > computerScore) {
            console.log(`You win! P: ${playerScore} C: ${computerScore}`);
        }
        else if (playerScore < computerScore) {
            console.log(`You lose... P: ${playerScore} C: ${computerScore}`);
        }
        else {
            console.log(`Draw! -- P: ${playerScore} C: ${computerScore}`);
        }
        

        /********************************************************** */
        /* ask if player wants to play again and restart game if so */
        /********************************************************** */

        let continuePlaying = prompt("Want to play again? Enter: Y/N.");
        
        if (continuePlaying === 'N' ){
            wantToPlay = false;
        }

        else { // reset round count and scores to play again
            roundNumber = 1;
            playerScore = 0;
            computerScore = 0;
        };
        
    }

}


game();
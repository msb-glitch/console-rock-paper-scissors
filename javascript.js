const choices = ["Rock","Paper","Scissors"]

function getComputerChoice(){
    /* Function to Get Computer's Choice of Rock, Paper, or Scissors */

    let computerChoice = Math.floor(Math.random()*choices.length); //get random number between 0 and length of choices array
    return choices[computerChoice];
}

console.log(getComputerChoice());
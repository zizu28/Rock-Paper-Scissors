let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let player_result = document.querySelector('.player-result')
let computer_result = document.querySelector('.computer-result')
let outcome = document.querySelector('.outcome')
let round = document.querySelector('#round')
let round_player = document.querySelector('#player-round')
let round_computer = document.querySelector('#computer-round')


let choices = ['Rock', 'Paper', 'Scissors'];
let player_score = 0;
let computer_score = 0;
let computer_prefix = "Computer Score: ";
let player_prefix = "Player Score: ";
let round_num = 1;
let player_round = 0
let computer_round = 0

// Function to determine computer's choice
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice].toLowerCase();
}
  

const rockPlayRound = () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";

    if(player_score < 5 && computer_score < 5){
        if(playerSelection === computerSelection){
            player_score += 0;
            computer_score += 0;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = "It is a draw";
        }
    
        if(computerSelection.toLowerCase() === "scissors"){
            player_score += 1;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = `${playerSelection} beats ${computerSelection} this round`;
        }
    
        if(computerSelection.toLowerCase() === "paper"){
            computer_score += 1;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = `${playerSelection} beats ${computerSelection} this round`;
        }
    }
    else {
        outcome.textContent = player_score === 5 && computer_score < 5 ? "You win. Game over!!!" : "Computer wins. Game over!!!";
        player_score = 0;
        computer_score = 0;
    }
}

const paperPlayRound = () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";

    if(player_score < 5 && computer_score < 5){
        if(playerSelection === computerSelection){
            player_score += 0;
            computer_score += 0;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = "It is a draw"; 
        }
    
        if(computerSelection.toLowerCase() === "rock"){
            player_score += 1;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = `${playerSelection} beats ${computerSelection} this round`;
        }
    
        if(computerSelection.toLowerCase() === "scissors"){
            computer_score += 1;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = `${playerSelection} beats ${computerSelection} this round`;
        }
    }
    else {
        outcome.textContent = player_score === 5 && computer_score < 5 ? "You win. Game over!!!" : "Computer wins. Game over!!!";
        player_score = 0;
        computer_score = 0;
    }
}

const scissorsPlayRound = () => {
    let computerSelection = getComputerChoice();
    let playerSelection = "scissors";

    if(player_score < 5 && computer_score < 5){
        if(playerSelection === computerSelection){
            player_score += 0;
            computer_score += 0;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = "It is a draw";
        }
    
        if(computerSelection.toLowerCase() === "paper"){
            player_score += 1;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = `${playerSelection} beats ${computerSelection} this round`;
        }
    
        if(computerSelection.toLowerCase() === "rock"){
            computer_score += 1;
            player_result.textContent = player_prefix + player_score;
            computer_result.textContent = computer_prefix + computer_score;
            outcome.textContent = `${computerSelection} beats ${playerSelection} this round`;
        }
    }
    else {
        outcome.textContent = player_score === 5 && computer_score < 5 ? "You win. Game over!!!" : "Computer wins. Game over!!!";
        player_score = 0;
        computer_score = 0;
    }
}

// if(round_num >= 3){
//     round.textContent = `Round ${round_num}`
//     outcome.textContent = player_round === 5 && computer_round < 5 ? "You win. Game over!!!" : "Computer wins. Game over!!!";
//     player_score = 0;
//     computer_score = 0;
//     player_result.textContent = '';
//     computer_result.textContent = '';
//     round_player.textContent = '';
//     round_computer.textContent = '';
// }
// else{
//     round.textContent = `Round ${round_num}`
//     player_round = player_score >= 5 ? player_round + 1 : player_round;
//     computer_round = computer_score >= 5 ? computer_round + 1 : computer_round;
//     round_num = player_round + computer_round
//     round_player.textContent =`Player Score: ${player_round}`
//     round_computer.textContent = `Computer Score: ${computer_round}`
// }

rock.addEventListener('click', rockPlayRound);
paper.addEventListener('click', paperPlayRound);
scissors.addEventListener('click', scissorsPlayRound);






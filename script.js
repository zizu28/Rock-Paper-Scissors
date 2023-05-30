let choices = ['Rock', 'Paper', 'Scissors'];
let players = ['you', 'computer'];
let decision = [];
let message;
let player_score = 0;
let computer_score = 0;

// Function to determine computer's choice
const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice].toLowerCase();
}

// Function to detrmine the next player
const who_to_play_next = () => {
    let choice = Math.floor(Math.random() * players.length);
    return players[choice];
}

// Function to determine winner or loser
const playRound = (playerSelection, computerSelection) => {
    // Randomly select the next player and append it's value first to the decision array before that of the next player
    let player = who_to_play_next();
    if(player == 'computer'){
        computerSelection = getComputerChoice();
        decision.push(computerSelection);
        playerSelection = prompt('Enter your choice', 'Write your choice here.');
        decision.push(playerSelection);

        // Iterate the decision array and decide winner or loser.
        if(decision[0].toLowerCase() === 'rock' && decision[1].toLowerCase() === 'scissors'){
            message = `${player} wins. ${decision[0]} beats ${decision[1]}.`;
            decision.pop();
            decision.pop();
            computer_score += 1;
            return message;
        }
        else if(decision[0].toLowerCase() === 'scissors' && decision[1].toLowerCase() === 'paper'){
            computer_score += 1;
            message = `${player} wins. ${decision[0]} beats ${decision[1]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'paper' && decision[1].toLowerCase() === 'rock'){
            computer_score += 1;
            message = `${player} wins. ${decision[0]} beats ${decision[1]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'scissors' && decision[1].toLowerCase() === 'rock'){
            player_score += 1;
            message = `${player} loses. ${decision[1]} beats ${decision[0]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'paper' && decision[1].toLowerCase() === 'scissors'){
            player_score += 1;
            message = `${player} loses. ${decision[1]} beats ${decision[0]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'rock' && decision[1].toLowerCase() === 'paper'){
            player_score += 1;
            message = `${player} loses. ${decision[1]} beats ${decision[0]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else{
            message = `No winner. Play again`;
            decision.pop();
            decision.pop();
            return message;
        }
    }
    else{
        playerSelection = prompt('Enter your choice', 'Write your choice here.');
        decision.push(playerSelection);
        computerSelection = getComputerChoice();
        decision.push(computerSelection);
        
        // Iterate the decision array and decide winner or loser.
        if(decision[0].toLowerCase() === 'rock' && decision[1].toLowerCase() === 'scissors'){
            player_score += 1;
            message = `${player} win. ${decision[0]} beats ${decision[1]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'scissors' && decision[1].toLowerCase() === 'paper'){
            player_score += 1;
            message = `${player} win. ${decision[0]} beats ${decision[1]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'paper' && decision[1].toLowerCase() === 'rock'){
            player_score += 1;
            message = `${player} win. ${decision[0]} beats ${decision[1]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'scissors' && decision[1].toLowerCase() === 'rock'){
            computer_score += 1;
            message = `${player} lose. ${decision[1]} beats ${decision[0]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'paper' && decision[1].toLowerCase() === 'scissors'){
            computer_score += 1;
            message = `${player} lose. ${decision[1]} beats ${decision[0]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else if(decision[0].toLowerCase() === 'rock' && decision[1].toLowerCase() === 'paper'){
            computer_score += 1;
            message = `${player} lose. ${decision[1]} beats ${decision[0]}.`;
            decision.pop();
            decision.pop();
            return message;
        }
        else{
            message = `No winner. Play again`;
            decision.pop();
            decision.pop();
            return message;
        }
    }
}

const game = () => {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Enter your choice', 'Write your choice here.');
    while(player_score < 5 || computer_score < 5){
        console.log(playRound(playerSelection, computerSelection));
    }
    return player_score > computer_score ? 'You win the game' : 'Computer wins the game'
}
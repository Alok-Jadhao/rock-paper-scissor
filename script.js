function getHumanChoice() {
    let str = prompt("Enter your choice for the game: ");
    return str.toLowerCase();
}

humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    let num = Math.random() * 3;
    let choice = "";
    if(num < 1) {
        choice = choice.concat("stone");
    } else if(num < 2) {
        choice = choice.concat("paper");
    } else {
        choice = choice.concat("scissor");
    }

    return choice;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if(humanChoice == computerChoice) {
        alert("It's a draw!");
        return "Draw";
    } else if((humanChoice == "stone" && computerChoice == "scissor") || (humanChoice == "paper" && computerChoice == "stone") || (humanChoice == "scissor" && computerChoice == "paper")) {
        alert("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        return "Win";
        
    } else {
        alert("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
        return "Lose";
    }
}

function playGame(round) {
    for (let index = 0; index < round; index++) {
        playRound();
        
    }
    if(humanScore == computerScore) alert("Nobody wins!");
    else if(humanScore > computerScore) alert("You won");
    else alert("You lost");
}

let round = prompt("NO. of rounds: ");
playGame(round);
// playRound();

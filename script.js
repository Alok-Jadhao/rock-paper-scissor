// function getHumanChoice() {
//     let str = prompt("Enter your choice for the game: ");
//     return str.toLowerCase();
// }

let humanChoice = "";
let computerChoice = "";

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
    
    if(humanChoice == computerChoice) {
        document.getElementById('result').value = "Draw";
        console.log("Draw");
    } else if((humanChoice == "stone" && computerChoice == "scissor") || (humanChoice == "paper" && computerChoice == "stone") || (humanChoice == "scissor" && computerChoice == "paper")) {
        humanScore++;
        document.getElementById('result').value = "You win!";
        console.log("You win");
    } else {
        computerScore++;
        document.getElementById('result').value = "You lose!";
        console.log("You lose");
    }

    if(humanScore == 5) {
        alert("You won the game");
        humanScore = 0;
        computerScore = 0;
    } else if(computerScore == 5) {
        alert("You lost the game");
        humanScore = 0;
        computerScore = 0;
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

// let round = prompt("No. of rounds: ");
// playGame(round);
// // playRound();

// /* event listener for rock button */
// document.getElementById("rock").addEventListener("click", function() {
//     humanChoice = "stone";
//     computerChoice = getComputerChoice();
//     playRound();
// });

// document.getElementById("paper").addEventListener('click', function() {
//     humanChoice = "paper";
//     computerChoice = getComputerChoice();
//     playRound();
// })

// document.getElementById("scissor").addEventListener('click', function() {
//     humanChoice = "scissor";
//     computerChoice = getComputerChoice();
//     playRound();
// })

/* single event listner for all buttons */
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        humanChoice = button.id;
        computerChoice = getComputerChoice();
        playRound();
    })
})
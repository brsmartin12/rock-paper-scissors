let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const randomValue = getRandomInt(3);
    if (randomValue === 0) {
        console.log('computer selected rock');
        return "rock";
    } else if (randomValue === 1) {
        console.log('computer selected paper');
        return "paper";
    } else {
        console.log('computer selected scissors');
        return "scissors";
    }
}

function getHumanChoice() {
    const humanInput = prompt("Rock, paper, or scissors?");
    console.log("human selected" + " " + humanInput);
    return humanInput;
}

getComputerChoice();
getHumanChoice();
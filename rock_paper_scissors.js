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
    humanInputStandardized = humanInput.toLowerCase();
    console.log("human selection standardized to " + humanInputStandardized);
    return humanInputStandardized;
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            // computer wins
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (computerChoice === "scissors") {
            // human wins
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        } else {
            //tie
            console.log(`It's a tie! ${humanChoice} and ${computerChoice}`);
            // Nothing happens to the scores
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        }

    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            // computer wins
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (computerChoice === "rock") {
            // human wins
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        } else {
            //tie
            console.log(`It's a tie! ${humanChoice} and ${computerChoice}`);
            // Nothing happens to the scores
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        }

    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            // computer wins
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        } else if (computerChoice === "paper") {
            // human wins
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        } else {
            //tie
            console.log(`It's a tie! ${humanChoice} and ${computerChoice}`);
            // Nothing happens to the scores
            console.log(`The Score is Human: ${humanScore} Computer: ${computerScore}`);
        }

    } else {  // this is a typo
        // Project constraints told us to assume correct input. I am just going to log a typo and do nothing else.
        console.log('Oops! A typo.');
    }
}

playRound();
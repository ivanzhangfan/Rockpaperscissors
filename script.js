let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateDisplay(message) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML += `<p>${message}</p>`;
}

function updateScore() {
    const resultsDiv = document.getElementById("results");
    const scoreElement = document.getElementById("score") || document.createElement("div");
    scoreElement.id = "score";
    scoreElement.innerHTML = `<strong>Score - You: ${humanScore}, Computer: ${computerScore}</strong>`;

    if (!document.getElementById("score")) {
        resultsDiv.appendChild(scoreElement);
    }
}

function checkWinner() {
    if (humanScore === 5) {
        updateDisplay("<strong>🎉 You won the game! Congratulations!</strong>");
        disableButtons();
    } else if (computerScore === 5) {
        updateDisplay("<strong>💻 Computer won the game! Better luck next time!</strong>");
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        updateDisplay(`It's a tie! Both chose ${humanChoice}`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        updateDisplay(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        humanScore++;
    } else {
        updateDisplay(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        computerScore++;
    }

    updateScore();
    checkWinner();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

    updateScore();
});
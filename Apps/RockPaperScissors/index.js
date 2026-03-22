const choices = ["Rock", "Paper", "Scissors"];
const emojiMap = { Rock: "✊", Paper: "🖐️", Scissors: "✌️" };

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "Rock":     result = computerChoice === "Scissors" ? "You win!" : "You lose!"; break;
            case "Paper":    result = computerChoice === "Rock"     ? "You win!" : "You lose!"; break;
            case "Scissors": result = computerChoice === "Paper"    ? "You win!" : "You lose!"; break;
        }
    }

    document.getElementById("playerEmoji").textContent     = emojiMap[playerChoice];
    document.getElementById("computerEmoji").textContent   = emojiMap[computerChoice];
    document.getElementById("playerDisplay").textContent   = playerChoice;
    document.getElementById("computerDisplay").textContent = computerChoice;

    const resultEl = document.getElementById("resultDisplay");
    resultEl.textContent = result;
    resultEl.className = "result-message";

    if (result === "You win!") {
        resultEl.classList.add("result-win");
        document.getElementById("playerScoreDisplay").textContent = ++playerScore;
    } else if (result === "You lose!") {
        resultEl.classList.add("result-lose");
        document.getElementById("computerScoreDisplay").textContent = ++computerScore;
    } else {
        resultEl.classList.add("result-tie");
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("playerScoreDisplay").textContent   = 0;
    document.getElementById("computerScoreDisplay").textContent = 0;
    document.getElementById("playerEmoji").textContent          = "?";
    document.getElementById("computerEmoji").textContent        = "?";
    document.getElementById("playerDisplay").textContent        = "Your pick";
    document.getElementById("computerDisplay").textContent      = "Computer";
    const resultEl = document.getElementById("resultDisplay");
    resultEl.textContent = "Make your move";
    resultEl.className = "result-message";
}

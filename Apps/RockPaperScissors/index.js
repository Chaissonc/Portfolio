/*Hello World! this is the JavaScript file that makes 
everything work on the rock paper scissors game. 
everything is open source so you can have a look!*/

const choices = ["Rock","Paper","Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore =0;
let computerScore =0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random()* 3)]
    console.log(computerChoice)
    let result ="";

    if(playerChoice== computerChoice){
        result = "ITS A TIE"
    }
    else{
        switch(playerChoice){
            case "Rock":
                result= (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!"
                break; 
            case "Paper":
                result= (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "Scissors":
                result= (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    playerDisplay.textContent = `You Picked: ${playerChoice}`
    computerDisplay.textContent = `Computer Picked: ${computerChoice}`
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText")
            playerScore++;
            playerScoreDisplay.textContent = playerScore
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText")
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
    }
}
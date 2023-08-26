//a place to store all the results of the selections to display
const computerSelection = document.getElementById("computerSelection");
const playerSelection = document.getElementById("playerSelection");
const resultOnDisplay = document.getElementById("result");
//a global variable to be accessed wherever
let playerChoice;
let computerChoice;
let result;
let gamePlay = 0;
let humanScore = 0;
let computerScore = 0;
//what should happen when user clicks button
//the range of our selections are the buttons
const possibleSelection = document.querySelectorAll('button');


//button selection leads to button id collection 
//which then saves id to the results section - playerSlection
possibleSelection.forEach (possibleSelection => possibleSelection.addEventListener("click",(event) => {
    playerChoice = event.target.id;
    playerSelection.innerHTML = playerChoice;

    getComputerChoice();
    game();
}))


function getComputerChoice(){
    //I want computer to randomly select a play from the array choices
    const choices = ['rock', 'paper', 'scissors'];
    const randomSelection = Math.floor(Math.random() * choices.length);
    //get the word associated with the randomSelection index value
    computerChoice = choices[randomSelection];
    computerSelection.innerHTML = computerChoice;
}

//function will play a round and keep a score of wins to later
//display the overall winner
function game(){
    playRound(computerChoice, playerChoice);

    if (gamePlay === 5 && humanScore > computerScore){
        result = 'Player Wins!';
        window.alert(result);
    }
    if (gamePlay === 5 &&computerScore > humanScore){
        result = 'Cat wins!';
        window.alert(result);
    } 
}

//results of rounds played
function playRound(){
    if (computerChoice === playerChoice){
        result = 'it\'s a draw';
        gamePlay ++;
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors'){
        result = computerChoice + ' beats ' + playerChoice + ', so you lose';
        computerScore ++;
        gamePlay ++;
    }
    if (computerChoice === 'rock' && playerChoice === 'paper'){
        result = playerChoice + ' beats ' + computerChoice + ', so you win';
        humanScore ++;
        gamePlay ++;
    }
    if (computerChoice === 'paper' && playerChoice === 'rock'){
        result = computerChoice + ' beats ' + playerChoice + ', so you lose';
        computerScore ++;
        gamePlay ++;
    } 
    if (computerChoice === 'paper' && playerChoice === 'scissors'){
        result = playerChoice + ' beats ' + computerChoice + ', so you win';
        humanScore ++;
        gamePlay ++;
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper'){
        result = computerChoice + ' beats ' + playerChoice + ', so you lose';
        computerScore ++;
        gamePlay ++;
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock'){
        result = playerChoice + ' beats ' + computerChoice + ', so you win';
        humanScore ++;
        gamePlay ++;
    }
    resultOnDisplay.innerHTML = result;
}



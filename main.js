//a place to store all the results of the selections
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


//for the range of buttons: each button selected should wait for an event
//the 'click' and this event's actions should collect the button IDs and save them
// to a var, which then saves them to the results section - playerSlection
possibleSelection.forEach(possibleSelection => possibleSelection.addEventListener("click",(event) => {
    playerChoice = event.target.id;
    playerSelection.innerHTML = playerChoice;

    //get computers selection - call a function
    getComputerChoice();
    //play a game
    game();
}))


function getComputerChoice(){
    //I want computer to randomly select a play from the array choices
    //math.floor will make sure the random number we get is a lower interger
    const choices = ['rock', 'paper', 'scissors'];
    const randomSelection = Math.floor(Math.random() * choices.length);
    //to get the word associated with the randomSelection index value I did what is happening below
    computerChoice = choices[randomSelection];
    computerSelection.innerHTML = computerChoice;
}

//function will play a round and keep a score of wins
function game() {
    playRound(computerChoice, playerChoice);

    if (gamePlay === 5 && humanScore > computerScore) {
        result = 'Player Wins!';
        window.alert(result);
    }
    if (gamePlay === 5 &&computerScore > humanScore) {
        result = 'Cat wins!';
        window.alert(result);
    } 
}



//results of rounds played
function playRound(){
    if (computerChoice === playerChoice) {
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



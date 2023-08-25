//a place to store all the results of the selections
const computerSelection = document.getElementById("computerSelection");
const playerSelection = document.getElementById("playerSelection");
const result = document.getElementById("result");

//what should happen when user clicks button
//the range of our selections are the buttons
const possibleSelection = document.querySelectorAll('button');

//a global variable to be accessed wherever
let playerChoice;

//for the range of buttons: each button selected should wait for an event
//the 'click' and this event's actions should collect the button IDs and save them
// to a var, which then saves them to the results section - playerSlection
possibleSelection.forEach(possibleSelection => possibleSelection.addEventListener("click",(event) => {
    playerChoice = event.target.id;
    playerSelection.innerHTML = playerChoice;

    //get computers selection - call a function
    getComputerChoice();
}))

function getComputerChoice(){
    //I want computer to randomly select a play from the range possibleSelection(remember its the buttons)
    //math.floor will make sure the random number we get is a lower interger
    const randomSelection = Math.floor(Math.random() * possibleSelection.length);
    console.log(randomSelection)
}


//a place to store the players selection
let playerSelection = document.getElementById("myPlay");
console.log(playerSelection.textContent);

//computer will make a selection from RP or S

function getComputersChoice(){
    const choice = ['rock' , 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choice.length);
    console.log(choice[random]);
}

getComputersChoice();




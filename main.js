//computer will make a selection from RP or S

function getComputersChoice(){
    const choice = ['rock' , 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choice.length);
    console.log(choice[random]);
}
getComputersChoice();

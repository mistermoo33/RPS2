const computerPlay = function(){
    let randomNum = Math.floor(3*Math.random())
    let rps = ["rock", "paper", "scissors"]
    return rps[randomNum]
}

const beats = function(player1, player2){
    if ((player1.toLowerCase() == "rock")&&(player2.toLowerCase() == "scissors") || (player1.toLowerCase() == "scissors")&&(player2.toLowerCase() == "paper") || (player1.toLowerCase() == "paper")&&(player2.toLowerCase() == "rock")){
        return true
    }

}

const playRound = function(playerSelection, computerSelection){
    let rps = ["rock", "paper", "scissors"]
    if (beats(playerSelection, computerSelection)){
        console.log(`You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`)
        return 1
    } else if (beats(computerSelection, playerSelection)){
        console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
        return -1
    } else {
        console.log("It seems to be a draw...")
        return 0
    }
}



const playGame = function(){
let score = 0
for(let k=0;k<5;k++){
    let input = prompt("Choose your weapon...")
    score += playRound(input,computerPlay())
}
if(score>0){
    console.log("You won best of 5")
} else if (score<0){
    console.log("You lost best of 5")
} else {
    console.log("It was a draw")
}
}
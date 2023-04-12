function getComputerChoice(){
    let x = ["rock", "paper", "scissors"];
    let y = Math.floor(Math.random() * 3);
    return x[y]
    
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' || playerSelection == "Rock"){
        if (computerSelection == 'paper'){
            return "you lose! paper wins"
        }
        if (computerSelection == 'rock'){
            return "tie"
        }
        if (computerSelection == 'scissors'){
            return "you win! rock wins"
        }

    }
    if (playerSelection == 'paper' || playerSelection == "Paper"){
        if (computerSelection == 'paper'){
            return "tie"
        }
        if (computerSelection == 'rock'){
            return "you win! paper wins"
        }
        if (computerSelection == 'scissors'){
            return "you lose! scissor wins"
        }

    }
    if (playerSelection == 'scissors' || playerSelection == "Scissors"){
        if (computerSelection == 'paper'){
            return "you win! scissor wins"
        }
        if (computerSelection == 'rock'){
            return "you lose! rock wins"
        }
        if (computerSelection == 'scissors'){
            return "tie"
        }

    }
    

  }
   
 function game(){
     let computer = 0;
     let user = 0;
     for(let i = 0; i < 5; i++){
         let x = prompt("pick rock, paper, or scissors");
         let y = getComputerChoice();
         let n = playRound(x,y);
         if (n.includes("win")){
             user += 1
         }
         else{
             computer += 1
         }
         if (user == 3){
             return "Congrats you win"
         }
         if (computer == 3){
            return "Bummer you lose"
         }
         

     }

 }


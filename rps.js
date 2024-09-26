
     
      let choice = ["rock", "paper",
      "scissors"];

      function getComputerChoice() {
         return choice[Math.floor(Math.random() * choice.length)];
      }

   
//function that takes computers answer and compares it with players/than delivers message/loop
    function playRound(playerSelection, computerSelection) {
      if (computerSelection === playerSelection) {
      return "its an tie!";
       
      } else if (
            (computerSelection === "rock" && playerSelection ==="scissors") ||
            (computerSelection === "scissors" && playerSelection ==="paper")|| 
            (computerSelection === "paper" && playerSelection ==="rock") 
            
      ) { 
            return "you lose!";

      } else if (
               (computerSelection === "scissors" && playerSelection ==="rock") ||
               (computerSelection === "paper" && playerSelection ==="scissors") || 
               (computerSelection === "rock" && playerSelection ==="paper")
      ) { 
             return "you win!"
         }
         else {
            return "not a valid choice"
         }
      
    }

      function playGame() {

         let humanScore = 0 ;
         let computerScore = 0;
         const rounds = 6; // change this for more or fewer rounds

         for (let i = 0; i < rounds; i++) {
            let playerSelection = prompt("Make your choice: Rock, Paper, Scissors").toLowerCase();
            let computerSelection = getComputerChoice();
            console.log(`Computer chose: ${computerSelection}`);

            let result = playRound(playerSelection, computerSelection);
                        console.log(result);

            if (result === "You win!") {
               humanScore++;
            } else if (result === "You lose!") {
               computerScore++;
            }

         }

         console.log(`Final Score: You: ${humanScore}, computer: ${computerScore}`);
         if (humanScore > computerScore) {
            console.log("Congratulations! you are the winner!");
         } else if (humanScore < computerScore) {
            console.log("The computer is the winner!");
         } else {
            console.log("its an overall tie!")
         }
     
      }
      //start game
      playGame();
    
    

      

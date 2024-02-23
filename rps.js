
     
      let choice = ["rock", "paper",
      "scissors"];

   //random computer choice //
        let computerSelection = choice[Math.floor(Math.random()*choice.length)];

        console.log(computerSelection)

//function that takes computers answer and compares it with players/than delivers message/loop
    function playRound(playerSelection, computerSelection) {

       
        if (computerSelection === playerSelection){ 
            console.log("its a tie!!")

        }  else if (computerSelection === "rock" && playerSelection ==="scissors" ||
            computerSelection === "scissors" && playerSelection ==="paper"|| 
            computerSelection === "paper" && playerSelection ==="rock")  {
            console.log("you lose")    
    } else    
            //(computerSelection === "paper" && playerSelection === "rock")        
         console.log("you win!")
    }
    
         
      const playerSelection = "scissors"
      //const computerSelection = computerChoice();
      console.log(playRound(playerSelection, computerSelection));
    

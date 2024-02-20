
     
      let choice = ["rock", "paper",
      "scissors"];

   
        let computerSelection = choice[Math.floor(Math.random()*choice.length)];

        console.log(computerSelection)

    function playRound(playerSelection, computerSelection) {
        if (computerSelection = "rock") 
            console.log("its a tie!")
             if(computerSelection = "paper") 
            console.log("you win1")

            else if("scissors")
            console.log("you lose paper beats rock")
            }
      
      const playerSelection = "rock";
      const computerSelection = computerChoice();
      console.log(playRound(playerSelection, computerSelection));
    

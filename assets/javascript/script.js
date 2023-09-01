

var again = true;
var wins = 0;
var losses = 0;
var ties = 0;


function playGame(){


    

    var valid = false
    
    

    while (valid === false){

        var userEntry = prompt("Welcome to Rock, Paper, Scissors.  You will now play this game against an AI opponent.  Please Enter 'r', 'p' or 's'(no quote marks) for Rock, Paper or Scissors, respectively" );

        if(userEntry == null) {
            return;
        }


        if (userEntry.toLowerCase() === "r" || userEntry.toLowerCase() === "rock" ){
            userEntry = "rock";
            valid = true;
        } else if ( userEntry.toLowerCase() === "p" || userEntry.toLowerCase() === "paper" ){
            userEntry = "paper";
            valid = true;
        } else if (userEntry.toLowerCase() === "scissors" || userEntry.toLowerCase() === "s"){ 
            userEntry = "scissors"
            valid = true;
        } else {
            alert("That was an invalid response.  Please try again.")
        }
    }

    var computerResponse = generateComputerResponse(1, 3);

    //Computer response #1 is rock, #2 is paper, and #3 is scissors.
    if((computerResponse === 1 && userEntry === "rock") ||( computerResponse === 2 && userEntry === "paper") || (computerResponse === 3 && userEntry == "scissors")){
        alert("You tied the computer.");
        ties++;
    } else if ((computerResponse === 1 && userEntry === "scissors") ||( computerResponse === 2 && userEntry === "rock") || (computerResponse === 3 && userEntry == "paper")){
        alert("You lost");
        losses++;
    } else if((computerResponse === 1 && userEntry === "paper") ||( computerResponse === 2 && userEntry === "scissors") || (computerResponse === 3 && userEntry == "rock")){
        alert("You won!!");
        wins++;
    }

    alert("Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties + "\n")

    while (again == true){
    
        again = confirm("Do you want to play again?");
    
        if(again == false){
            alert("Thank you for playing.  Have a nice day!");
            again = false;
        } else {
            playGame();
        }
    }
}

function generateComputerResponse(min, max){
    var rockPaperOrScissors= Math.floor(Math.random() * (max - min + 1) + min);  
    return rockPaperOrScissors;
}



playGame();
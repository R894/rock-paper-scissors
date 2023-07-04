var playerScore = 0;
var aiScore = 0;

var rock = document.getElementById("Rock");
var paper = document.getElementById("Paper");
var scissors = document.getElementById("Scissors");

var info = document.getElementById("info");
var playerScoreDiv = document.getElementById("player-score");
var aiScoreDiv = document.getElementById("ai-score");

rock.addEventListener("click", function(){ playRound("Rock");});
paper.addEventListener("click", function(){playRound("Paper");});
scissors.addEventListener("click", function(){playRound("Scissors");});


function playRound(playerChoice){
    var aiChoice = generateChoice();
    updateScore(playerChoice, aiChoice, rps(playerChoice, aiChoice));
}

function updateScore(playerChoice, aiChoice, winner){
    if(winner==1){
        info.textContent= playerChoice+ " beats " +aiChoice +  ". Player wins!";
    }
    else if(winner==2){
        info.textContent= aiChoice + " beats " + playerChoice+ ". AI wins!";
    }else{
        info.textContent="It's a tie!";
    }
    playerScoreDiv.textContent = playerScore;
    aiScoreDiv.textContent = aiScore;
}

function updateInfo(winner){
    info.textContent = message;
}

function generateChoice(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
        return "Rock";
    }

    if(randomNumber == 2){
        return "Paper";
    }

    if(randomNumber == 3){
        return "Scissors";
    }
}

function rps(playerChoice, aiChoice){
    if(playerChoice == aiChoice){
        return 0;
    }
    if(playerChoice == "Rock"){
        if(aiChoice == "Paper"){
            aiScore++;
            return 2;
        }

        if(aiChoice =="Scissors"){
            playerScore++;
            return 1;
        }
    }
    if(playerChoice == "Paper"){
        if(aiChoice == "Rock"){
            playerScore+=1;
            return 1;
        }
        if(aiChoice == "Scissors"){
            aiScore+=1;
            return 2;
        }
        
    }
    if(playerChoice == "Scissors"){
        if(aiChoice == "Rock"){
            aiScore+=1;
            return 2;
        }
        if(aiChoice == "Paper"){
            playerScore+=1;
            return 1;
        }
    }
}
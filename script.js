var playerScore = 0;
var aiScore = 0;

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var info = document.getElementById("info");
var playerScoreDiv = document.getElementById("player-score");
var aiScoreDiv = document.getElementById("ai-score");

rock.addEventListener("click", function(){ playRound("rock");});
paper.addEventListener("click", function(){playRound("paper");});
scissors.addEventListener("click", function(){playRound("scissors");});


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
        return "rock";
    }

    if(randomNumber == 2){
        return "paper";
    }

    if(randomNumber == 3){
        return "scissors";
    }
}

function rps(playerChoice, aiChoice){
    if(playerChoice == aiChoice){
        return 0;
    }
    if(playerChoice == "rock"){
        if(aiChoice == "paper"){
            aiScore++;
            return 2;
        }

        if(aiChoice =="scissors"){
            playerScore++;
            return 1;
        }
    }
    if(playerChoice == "paper"){
        if(aiChoice == "rock"){
            playerScore+=1;
            return 1;
        }
        if(aiChoice == "scissors"){
            aiScore+=1;
            return 2;
        }
        
    }
    if(playerChoice == "scissors"){
        if(aiChoice == "rock"){
            aiScore+=1;
            return 2;
        }
        if(aiChoice == "paper"){
            playerScore+=1;
            return 1;
        }
    }
}
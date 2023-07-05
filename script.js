var currentRound = 1;
var playerScore = 0;
var aiScore = 0;

var rock = document.getElementById("Rock");
var paper = document.getElementById("Paper");
var scissors = document.getElementById("Scissors");

var info = document.querySelector("#info .msg");
var roundDiv = document.querySelector("#info .round");
var playerScoreDiv = document.getElementById("player-score");
var aiScoreDiv = document.getElementById("ai-score");
var resetButton = document.querySelector("button");

const rockClickHandler = function() {
    playRound("Rock");
};
const paperClickHandler = function() {
    playRound("Paper");
};
const scissorsClickHandler = function() {
    playRound("Scissors");
};

togglePlayButtons(true);
resetButton.addEventListener("click", function(){resetGame()})

function togglePlayButtons(bool){
    if(bool == true){
        rock.addEventListener("click", rockClickHandler);
        paper.addEventListener("click", paperClickHandler);
        scissors.addEventListener("click", scissorsClickHandler);
    }else {
        rock.removeEventListener("click", rockClickHandler);
        paper.removeEventListener("click", paperClickHandler);
        scissors.removeEventListener("click", scissorsClickHandler);
    }
}




function playRound(playerChoice){
    var aiChoice = generateChoice();
    updateScore(playerChoice, aiChoice, rps(playerChoice, aiChoice));
    updateRound(currentRound);
}

function updateRound(round){
    roundDiv.textContent="Round " + round;
    if(currentRound == 5){
        finishGame();
    }
    currentRound = round + 1;
}

function finishGame(){
    var winner = ''
    togglePlayButtons(false);
    clearInfo();
    if(playerScore > aiScore){
        winner = 'Player';
    } else if(playerScore == aiScore){
        winner = 'Tie';
    }else {
        winner = 'AI';
    }
    if(winner != 'Tie'){
        info.textContent = winner + " won!";
    }else {
        info.textContent = "It's a tie!";
    }
    
}

function resetGame(){
    togglePlayButtons(true);
    currentRound = 1;
    playerScore = 0;
    aiScore = 0;
    resetText();
}
function clearInfo(){
    info.textContent = '';
}
function resetText(){
    roundDiv.textContent = '';
    info.textContent = '';
    currentRound.textContent ='';
    playerScoreDiv.textContent = 0;
    aiScoreDiv.textContent = 0;
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
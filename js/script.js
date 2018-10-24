// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



// DOCUMENT READY FUNCTION BELOW
$(document).ready(function(){
    
    var userChoice="";
    var computerChoice="";
    var winner="";
    
    var randomNumber = 0;
    
    $("#shoot").click(function(){
        var userInput = $("#input").val().toLowerCase();
        randomNumber = Math.random();
        if((userInput === "rock") || (userInput === "scissors") || (userInput === "paper")){
            $("#userChoice").text(userInput);
            $("#result").text("");
        }
        else{
            $("#result").text("Don't you know how to play this game?");
        }
        if(randomNumber > 0.66){
            computerChoice = "rock";
            $("#computerChoice").text("rock");
        }
        else if(randomNumber < 0.66 && randomNumber > 0.33){
            computerChoice = "scissors";
            $("#computerChoice").text("scissors");
        }
        else{
            computerChoice = "paper";
            $("#computerChoice").text("paper");
        }
        if(userInput === "rock"){
            if(computerChoice === "rock"){
                $("#result").text("It's a tie!");
            }
            else if(computerChoice === "scissors"){
                $("#result").text("User wins!");
            }
            else if(computerChoice === "paper"){
                $("#result").text("Computer wins!");
            }
        }
        if(userInput === "scissors"){
            if(computerChoice === "rock"){
                $("#result").text("Computer wins!");
            }
            else if(computerChoice === "scissors"){
                $("#result").text("It's a tie!");
            }
            else if(computerChoice === "paper"){
                $("#result").text("User wins!");
            }
        }
        if(userInput === "paper"){
            if(computerChoice === "rock"){
                $("#result").text("User wins!");
            }
            else if(computerChoice === "scissors"){
                $("#result").text("Computer wins!");
            }
            else if(computerChoice === "paper"){
                $("#result").text("It's a tie!");
            }
        }
    });
});

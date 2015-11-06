// Rock, Paper, Scissors Game
// Coded by Ryan Fitch for Codecademy 

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    var statement;
    
    if (choice1 === choice2)
        statement = "The result is a tie!";
        
    else if (choice1 === "rock") {
        if (choice2 === "scissors")
            statement = "rock wins";
        else
            statement = "paper wins";
    }
    else if (choice1 === "paper") {
        if (choice2 === "scissors")
            statement = "scissors wins";
        else
            statement = "paper wins";
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock")
            statement = "rock wins";
        else
            statement = "scissors wins";
    }
    
    else {
        statement = "Invalid option detected. Game is exiting...";
    }
        
    return statement;
};

var output = compare(userChoice, computerChoice);

console.log(output);
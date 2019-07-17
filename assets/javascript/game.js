//Press any key to start

//list of words for World Game
var words = ["ZIMBABWE", "AUSTRALIA", "CHINA", "GREECE", "DENMARK", "BRAZIL"] //9 is highest



var wins = 0; 


var leftoverGuess = document.getElementById("guessesleft-text"); 
var winsText = document.getElementById("wins-text"); 
var guessesMade = document.getElementById("guesses"); 
var fillBlank = document.getElementById("fillBlank");

var allGuesses = []; 
var guessesLeft = 12; 
var guessedArr = []; 
var appGuess = words[Math.floor(Math.random() * words.length)];//gets a random word
for(var i=0; i<appGuess.length; i++){
    guessedArr.push('_'); 
}

//function run whenever key is pressed 
document.onkeyup = function(event) {
    userGuess = event.key.toUpperCase(); 

    for(let j=0; j<appGuess.length; j++){
            if(appGuess[j] === userGuess){
                console.log(userGuess); 
                guessedArr[j] = appGuess[j]; 
               
            }
    }

    for(var i=0; i<allGuesses.length; i++){
        if(allGuesses[i] === userGuess){
            alert("You already guessed "+ userGuess + "!")
            return
        }else if(i === allGuesses.length-1){
            guessesMade.textContent += " " + userGuess;
        }
    }
    allGuesses.push(userGuess); 


    
    if(guessedArr.indexOf('_') === -1){ //if no more dashes left then user guesses word correctly 
        wins++; 
    
    }else if(guessesLeft === 0) { //sees if there's no guesses left
        alert("You lost!"); 
        guessesLeft = 12;  
        guessesMade.textContent= "Your Guesses so far: " + " "; 
    }else{
        guessesLeft--; //this keeps track of guesses

    }    

    fillBlank.textContent = guessedArr.join(" "); 
    winsText.textContent = "Wins: " + wins; 
    leftoverGuess.textContent = "Guesses Left: " + guessesLeft; 

    
}; 


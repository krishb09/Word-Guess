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
var appGuess = ""; 
var appGuess = words[Math.floor(Math.random() * words.length)];//gets a random word

for(var i=0; i<appGuess.length; i++){
    guessedArr.push('_'); 
}
//function run whenever key is pressed 
document.onkeyup = function(event) {
    userGuess = event.key.toUpperCase(); 

    guessesMade.textContent += " " + userGuess; //needs to have the guessesMade have something before doing the for loop 

    for(var i=0; i<allGuesses.length; i++){
        if(allGuesses[i] === userGuess){
            alert("You already guessed "+ userGuess + "!")
            return
        }
    }  
    allGuesses.push(userGuess); 

    // allGuesses.push(userGuess); 
    for(let j=0; j<appGuess.length; j++){
            if(appGuess[j] === userGuess){
                console.log(userGuess); 
                guessedArr[j] = appGuess[j]; 
            }
    }

    if(guessedArr.indexOf('_') === -1){ //if no more dashes left then user guesses word correctly 
        wins++; 
        reset(); 
    }else if(guessesLeft === 0) { //sees if there's no guesses left
        alert("You lost!"); 
        guessesMade.textContent= "Your Guesses so far: " + " "; 
        reset(); 
    }else{
        guessesLeft--; //this keeps track of guesses
    }    

    fillBlank.textContent = guessedArr.join(" "); 
    winsText.textContent = "Wins: " + wins; 
    leftoverGuess.textContent = "Guesses Left: " + guessesLeft; 

    //make reset function to put when user wins/ loses
    function reset(){
        guessesLeft = 12; 
        guessedArr = []; 
        allGuesses = []; 
        appGuess = words[Math.floor(Math.random() * words.length)];
        for(var i=0; i<appGuess.length; i++){
            guessedArr.push('_'); 
        }
            guessesMade.textContent = "Your Guesses so far: " + " "; 
    }
}; 


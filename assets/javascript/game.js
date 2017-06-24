var secretLetters  = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var remguesses = 9;

var next = null;
var guessCount = 9;
var playerGuesses = [];

//random-ish gneration of the computers letter 
var computerGuess = secretLetters[Math.floor(Math.random() * secretLetters.length)];

var increm_remguesses = function () {
  document.querySelector("#lives").innerHTML = "Remaining Guesses: " + remguesses;
    };


var updateGuessed = function () {
  document.querySelector('#record').innerHTML = "Guessed: " + playerGuesses.join(', ');
    };

var mod_next = function () {
  this.next = this.secretLetters[Math.floor(Math.random() * this.secretLetters.length)];
    };

//Reset
var reset = function () {
        guessCount = 9;
        remguesses = 9;
        playerGuesses = [];
        increm_remguesses();
        mod_next();
        updateGuessed();
        computerGuess=secretLetters[Math.floor(Math.random() * secretLetters.length)];;
    };

//Recognize players guess
document.onkeyup = function (event) {
    remguesses--;
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if ($.inArray('playerGuess', playerGuesses) !== -1) {
        alert("You already guessed that, guess again");
    }
    else{
        playerGuesses.push(playerGuess);
        increm_remguesses();
        updateGuessed();

        if (remguesses > 0) {
            if (playerGuess === computerGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;

                alert(computerGuess.toUpperCase() + " is correct!");
                reset();
            }
        }
        else{
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;

            alert(computerGuess.toUpperCase() + " was the secret letter.");
            reset();
        }
    }
};
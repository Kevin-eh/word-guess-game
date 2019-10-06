// generate random word
// store that as "finalwordchoice"
// create an array out of that word
// create function that takes in a word and outputs an array of equal length

var lives = 10;
var livesText = document.getElementById("lives-text");
livesText.textContent = "lives: " + lives;




var wordchoices = [
  "slake",
  "luxuriant",
  "vitalize",
  "plush",
  "delightful",
  "scrumptious"
];


var finalwordchoice =
  wordchoices[Math.floor(Math.random() * wordchoices.length)];
console.log(finalwordchoice);

var targetword = finalwordchoice.split("")
var dashing = []
var guessed = []

var remainingLetters = targetword.length;
var remainingLettersText = document.getElementById("remainingLetters-text");
remainingLettersText.textContent = "remaining letters:" + remainingLetters;

var guessedtext = document.getElementById("guessedtext")
guessedtext.textContent = "Guessed: " + guessed

var youdidit = document.getElementById("youdidit");


var finalwordtext = document.getElementById("finalwordchoice-text");

function underscores(targetword) {
  for (var k = 0; k < targetword.length; k++) {
    dashing[k] = "_";
  }
}

// for (var j = 0; j < finalwordchoice.length; j++) {
//   finalwordchoice[j] = "_";
//   finalworddash = finalwordchoice[j];
// }
underscores(targetword)
finalwordtext.textContent = "the word is " + dashing.join(" ");

// var finalworddash = new char[finalwordchoice.length()]();
//take in user input with an event listener 
//if you have something you need to do more than once make it a function
//take in user input
//compare that to our targetword using a for loop




function checktarget(letter) { }
document.onkeyup = function (event) {
  checktarget(event.key)
  var userGuess = event.key

  // dashing[g] !== "_"
  // if (userguess !== guessed) {
  let isRight = false;
  if (remainingLetters > 0 && lives > 0) {


    guessed.push(userGuess);
    guessedtext.textContent = "Guessed: " + guessed

    for (var g = 0; g < targetword.length; g++) {



      if (targetword[g] === userGuess && dashing[g] === "_") {
        dashing[g] = userGuess;
        remainingLetters--;
        console.log(userGuess)
        finalwordtext.textContent = "the word is " + dashing.join(" ");
        remainingLettersText.textContent = "remaining letters:" + remainingLetters;

        isRight = true;
      }

      // else {
      //   console.log("no"); lives--;
      //   livesText.textContent = "lives: " + lives;
      //   guessed.push(userGuess);
      //   guessedtext.textContent = "Guessed: " + guessed
      // }
    }
    if (isRight === false) {
      console.log("no"); lives--;
      livesText.textContent = "lives: " + lives;
      // guessed.push(userGuess);
      // guessedtext.textContent = "Guessed: " + guessed
    }

    if (remainingLetters == 0) { youdidit.textContent = "YOU DID IT HURRAY FOR YOU! Refresh for even more good times."; }
    if (lives == 0) { youdidit.textContent = "OH NO YOU LOST! I'M SO SORRY. Refresh and try again."; }
  }
}



//take in the event key
//using for loop, compare that to each index in our targetword array
//if there is a match, replace index with corresponding letter
//if no match at the end of the loop, decrease score
//if the letter has already been guessed, do nothing


//things that still needed to get done
// 1. don't let user input anything other than a letter
// 2. don't let user reguess letter already guessed
// 3. refresh page upon win/loss showing win/loss screen
// 4. restart game upon win/loss
// generate random word
// store that as "finalwordchoice"
// create an array out of that word
// create function that takes in a word and outputs an array of equal length

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


var finalwordtext = document.getElementById("finalwordchoice-text");

function underscores(targetword) {
  for (var k = 0; k < targetword.length; k++) {
    dashing.push("_")
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
}


//take in the event key
//using for loop, compare that to each index in our targetword array
//if there is a match, replace index with corresponding letter
//if no match at the end of the loop, decrease score
//if the letter has already been guessed, do nothing
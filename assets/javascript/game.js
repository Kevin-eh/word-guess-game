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

var finalwordtext = document.getElementById("finalwordchoice-text");

finalwordtext.textContent = "the word is " + finalwordchoice;

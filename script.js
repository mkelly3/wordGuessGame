var guesses = document.querySelector("#guess");
var winLoss = document.querySelector(".data");
var startButton = document.querySelector("button");
var timeTitle = document.querySelector("#time");
var message = document.querySelector("#message");
var time = 21;
var winCounter = document.querySelector("#win");
var lossCounter = document.querySelector("#loss");
//var guessingWord = ["java", "css", "html"];
var word = "pandulce"
function setTime() {
  var timerInterval = setInterval(function () {
    time--;
    timeTitle.textContent = time;

    if (time === 0) {
      message.textContent = "You ran out of time!"
      //add loss to lose counter
      clearInterval(timerInterval);
    }
  }, 1000);
}


function startGame() {
  startButton.addEventListener("click", function () {
    setTime();

  })
}
startGame();
// function randomWord() {
// var randomWord= guessingWord[Math.floor(Math.random()*guessingWord.length)];
// return randomWord;
// }

function guessWord() {
  // randomWord();
  guesses.addEventListener("keydown", function (event) {
    var letter = event.key.toLowerCase();
    console.log(letter);
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        guesses.textContent = event.letter;
      }
else {
  guesses.textContent = ""
  
}
    }
  })
}
guessWord();
//counter of wins and loss
  //function 
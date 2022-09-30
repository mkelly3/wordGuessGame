var guesses = document.querySelector(".guess");
var winLoss = document.querySelector(".data");
var startButton = document.querySelector("button");
var timeTitle = document.querySelector("#time");

var time = 21;

function setTime() {
    var timerInterval = setInterval(function() {
        time--;
      timeTitle.textContent = time;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }


  function startGame(){
    startButton.addEventListener("click", function(){
        setTime();

    })
  }
  startGame();
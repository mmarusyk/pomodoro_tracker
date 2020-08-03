let startButton = document.getElementById('button-start');
let stopButton = document.getElementById('button-stop');
let minutes = document.getElementById('digit-minutes');
let seconds = document.getElementById('digit-seconds');

let startTimer;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  if (startTimer === undefined) {
    startTimer = setInterval(goTimer, 1000)
  }
})

stopButton.addEventListener('click', () => {
  minutes.innerText = 25;
  seconds.innerText = '00';
  resetTimer();
})

function goTimer() {
  if (seconds.innerText != 0) {
    seconds.innerText--;
  } else if (minutes.innerText != 0 && seconds.innerText == 0) {
    seconds.innerText = 59;
    minutes.innerText--;
  }
  if (minutes.innerText == 0 && seconds.innerText == 0) {
    var audio = new Audio('https://onlineclock.net/audio/options/default.mp3');
    audio.play();
    setTimeout(() => {
      audio.pause();
      minutes.innerText = 25;
      seconds.innerText = '00';
    }, 5000);
    resetTimer();
  }
}

function resetTimer() {
  clearInterval(startTimer);
  startTimer = undefined;
  startButton.disabled = false;
  stopButton.disabled = true;
}
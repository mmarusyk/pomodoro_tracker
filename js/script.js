function goTimer(value){
  var time = 1499;
  setInterval(function () {
    if (time < 0) {
      clearInterval();
    } else {
      document.getElementById("digit-minutes").textContent= Math.floor(time / 60);
      document.getElementById("digit-seconds").textContent= time % 60;
      time--;
    }
    if (time < 0) {
      var audio = new Audio('https://onlineclock.net/audio/options/default.mp3');
      audio.play();
    }
  }, 1000);
}

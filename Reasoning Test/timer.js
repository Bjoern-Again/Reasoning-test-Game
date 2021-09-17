let timeUnit = 0;
let stopWatch;

export const displayTime = function() {

    // Calculate current hours, minutes, and sceonds
    let hours = Math.floor(timeUnit / 3600);
    let min = Math.floor((timeUnit % 3600) / 60);
    let sec = Math.floor(timeUnit % 60);

    // display extra zero in the display
    let displayHour = (hours < 10) ? '0' + hours : hours;
    let displayMin = (min < 10) ? '0' + min : min;
    let displaySec = (sec < 10) ? '0' + sec : sec;



    document.querySelector('.clock').textContent = displayHour + ':' + displayMin + ':' + displaySec;

    timeUnit++;


    if (displayMin === '03') {
      clearInterval(stopWatch);
      isStartBtn = true;
    }
  }

  export const startTime = function (isStartBtn) {
    if (isStartBtn) {
      stopWatch = setInterval(displayTime, 1000);
    }
  }


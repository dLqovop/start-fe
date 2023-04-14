var progress = document.getElementById('progress');
let intervalID;
let jswidth = 0;
function start() {
  intervalID = setInterval(() => {
    jswidth++;
    progress.style.width = `${jswidth}%`;
    if (jswidth === 100) {
      clearInterval(intervalID);
      setTimeout(() => {
        intervalID = setInterval(() => {
          jswidth--;
          progress.style.width = `${jswidth}%`;
          if (jswidth === 0) {
            clearInterval(intervalID);
            start();
          }
        }, 30);
      }, 10);
    }
  }, 30);
}

start();

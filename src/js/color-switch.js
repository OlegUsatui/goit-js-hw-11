const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', startChangeBgColor);
refs.stopBtn.addEventListener('click', stopChangeBgColor);

let intervalId = null;

function startChangeBgColor() {
    intervalId = setInterval(() => {
      refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
    
    refs.startBtn.setAttribute("disabled", "disabled");
};

function stopChangeBgColor() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute("disabled");
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
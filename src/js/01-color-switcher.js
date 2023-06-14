const elements = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  bodyBg: document.querySelector('body'),
};

let timerId = null;

elements.btnStart.addEventListener('click', handlerClickStart);

function handlerClickStart(event) {
  timerId = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }
      elements.bodyBg.style.backgroundColor = getRandomHexColor();
  }, 1000);
    event.target.disabled = true;
};

elements.btnStop.addEventListener('click', () => {
    elements.bodyBg.style.backgroundColor = '#fafafa';
    clearInterval(timerId);
    elements.btnStart.disabled = false;
});
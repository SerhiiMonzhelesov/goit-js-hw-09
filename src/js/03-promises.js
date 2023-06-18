const form = document.querySelector('.form');

form.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();
  const { delay, step, amount } = form.elements;
  
  for (let i = 0; i < Number(amount.value); i += 1){
    const promiseDelay = Number(delay.value) + Number(step.value) * i;
    createPromise(i+1, promiseDelay).then()
  }
}




function createPromise(position, delay) {
const shouldResolve = Math.random() > 0.3;
if (shouldResolve) {
  // Fulfill
  } else {
    // Reject
  }
}

console.dir(typeof (form));



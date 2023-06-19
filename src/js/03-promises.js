import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerForm);

function handlerForm(event) {
  event.preventDefault();
  const { delay, step, amount } = form.elements;
  
  for (let i = 0; i < Number(amount.value); i += 1){
    const promiseDelay = Number(delay.value) + Number(step.value) * i;
    createPromise(i + 1, promiseDelay)
      .then(({ position, promiseDelay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${promiseDelay}ms`)
      })
      .catch(({ position, promiseDelay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${promiseDelay}ms`)
      });
  };
};

function createPromise(position, promiseDelay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, promiseDelay });
      } else {
        reject({ position, promiseDelay });
      }
    }, promiseDelay);
  })
  return promise;
};
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

const elements = {
    calendar: document.querySelector('#datetime-picker'),
    btnStartTimer: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds')
}
let idTimerChoice = null;
elements.btnStartTimer.disabled = true;

const fp = flatpickr(elements.calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date(selectedDates).getTime() < new Date().getTime()) {
      Report.failure(
        'Wrong date or time for timer',
        'You must choose a future date or time for timer',
        'OK',
      )}  
  }
})

elements.calendar.addEventListener('input', () => {
  return idTimerChoice = setInterval(() => {
    new Date(fp.selectedDates).getTime() > new Date().getTime() ?
      elements.btnStartTimer.disabled = false :
      elements.btnStartTimer.disabled = true;
  }, 1000)
})

elements.btnStartTimer.addEventListener('click', handlerClick)

function handlerClick(event) {
  clearInterval(idTimerChoice);
  



  elements.btnStartTimer.disabled = true;

}




console.log();


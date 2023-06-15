import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const elements = {
    calendar: document.querySelector('#datetime-picker'),
    btnStartTimer: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds')
}

const fp = flatpickr(elements.calendar, {
    enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
})
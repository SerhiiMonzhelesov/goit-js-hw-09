import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

const elements = {
  calendar: document.querySelector('#datetime-picker'),
  btnStartTimer: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds'),
};

const fp = flatpickr(elements.calendar, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  dateFormat: 'Y-m-d   H-i-S',
  onClose(selectedDates) {
    if (new Date(selectedDates).getTime() < Date.now()) {
      Report.failure(
        'Wrong date or time for timer',
        'You must choose a future date or time for timer',
        'OK'
      );
    } else elements.btnStartTimer.disabled = false;
  },
});

let idTimerPeriod = null;
elements.btnStartTimer.disabled = true;

elements.btnStartTimer.addEventListener('click', () => {
  if (new Date(fp.selectedDates).getTime() > Date.now()) {
    elements.calendar.disabled = true;
    elements.btnStartTimer.disabled = true;
    idTimerPeriod = setInterval(updatePeriod, 1000);
  } else
    Report.failure(
      'Wrong date or time for timer',
      'You must choose a future date or time for timer',
      'OK'
    );
});

function updatePeriod() {
  const periodOfTime = new Date(fp.selectedDates).getTime() - Date.now();
  if (periodOfTime < 999) {
    clearInterval(idTimerPeriod);
    Report.success(
      'CONGTATULATION',
      'To run a new countdown timer select a date and/or time',
      'OK'
    );
    elements.calendar.disabled = false;
  }
  const convertPeriod = convertMs(periodOfTime);
  addLeadingZero(convertPeriod);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  elements.days.textContent = String(days).padStart(2, '0');
  elements.hours.textContent = String(hours).padStart(2, '0');
  elements.minutes.textContent = String(minutes).padStart(2, '0');
  elements.seconds.textContent = String(seconds).padStart(2, '0');
}

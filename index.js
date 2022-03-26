const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const periodElement = document.querySelector(".period");
const inputElement = document.querySelector("input");

let alarmTime = null;
let alarmTimeout = null;

const audio = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3"
);

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
  } else {
    console.log("no alarm already to clear ");
  }
}

function setAlarmTime(value) {
  alarmTime = value;
  const timeToAlarm = new Date(alarmTime);

  console.log("current time is : ", timeToAlarm);
}

let alarmList = [];

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);
    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();

      console.log(alarmTime); //working area
      console.log(new Date(alarmTime).getHours()); //working area
      console.log(new Date(alarmTime).getMinutes()); //working area
      console.log(new Date(alarmTime).getDate()); //working area

      alarmTimeout = setTimeout(() => {
        audio.play();
      }, timeout);
    } else {
      document.querySelector("error-message").style.visibiltiy = "visible";
      console.log("can't be set ");
    }
  }
}

function updateTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  hoursElement.innerHTML = hour > 12 ? hour - 12 : hour;
  minutesElement.innerHTML = minute > 9 ? minute : "0" + minute;
  secondsElement.innerHTML = second > 9 ? second : "0" + second;
  periodElement.innerHTML = hour >= 12 && second > 0 ? "PM" : "AM";
}

function playAudio() {
  audio.play();
}

function clearInput() {
  inputElement.value = null;
}

console.log(new Date());

setInterval(() => {
  updateTime();
  //   setAlarm();
}, 1000);

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mintues = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minDegrees = (mintues / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  const hourDegrees = (hours / 12) * 360 + (mintues / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  console.log(hours);
}
setInterval(setDate, 1000);

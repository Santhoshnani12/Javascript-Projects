var hourID = document.getElementById("hourID");
var minuteID = document.getElementById("minuteID");
var secondID = document.getElementById("secondID");
var am_pmID = document.getElementById("am_pmID");
var dayTime = document.getElementById("day-time");

var displayDayTime;

function getTime() {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  var am_pm = "AM";

  if(hour >= 0 && hour <= 11) {
    displayDayTime = "Good Morning";
  } else if(hour >= 12 && hour <= 15) {
    displayDayTime = "Good Afternoon";
  } else if(hour >= 16 && hour <= 21) {
    displayDayTime = "Good Evening";
  } else {
    displayDayTime = "Good Night";
  }

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }


  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourID.innerHTML = hour;
  minuteID.innerHTML = minutes;
  secondID.innerHTML = seconds;
  am_pmID.innerHTML = am_pm;
  dayTime.innerHTML = displayDayTime;
  
}

setInterval(getTime, 1000);
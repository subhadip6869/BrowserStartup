const clockDiv = document.getElementById("clock");
const weekdayDiv = document.getElementById("weekday");
const month = document.getElementById("month");
const day = document.getElementById("date");

const timer = setInterval(clockTiming, 1000);
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
const months = ["January", "February", "March", "April", "May", "June", 
                "July","August","September","October","November","December"];

function clockTiming() {
    var date = new Date();
    
    weekdayDiv.innerHTML = `${weekdays[date.getDay()]}`;
    // clockDiv.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clockDiv.innerHTML = `${date.toLocaleTimeString()}`;
    month.innerHTML = `${months[date.getMonth()]}`;
    day.innerHTML = `${date.getDate()}`
}

clockTiming();

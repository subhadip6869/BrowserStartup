let clockDiv = document.getElementById("clock");
let weekdayDiv = document.getElementById("weekday");
var timer = setInterval(clockTiming, 1000);

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']

function clockTiming() {
    var date = new Date();
    
    weekdayDiv.innerHTML = `${weekdays[date.getDay()]}`
    // clockDiv.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    clockDiv.innerHTML = `${date.toLocaleTimeString()}`
}

clockTiming();

function realtimeClock(){

    var rtClock = new Date();

    var hours = rtClock.getHours(); // get the hours in 24 hours format  0-23
    var minutes = rtClock.getMinutes(); // 0-59
    var seconds = rtClock.getSeconds(); // 0-59
    // var day = rtClock.getFullYear()

    // document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds;

    // document.getElementById('day').innerHTML = day;

    // Convert the hours component to 12-hours format
    if(hours == 0){
        hours = 12;
    }
    
    hours = (hours > 12 ) ? hours - 12 : hours;

    // Add AM and PM to the time
   var amPm = (hours < 12) ? "AM" : "PM";

    //Pad the hours, minutes and secponds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Display clock
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}
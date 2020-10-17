var seconds = 0;
var minutes = 0;
var hours = 0;


var displaySeconds = 0;
var displayMinutes = 0;
var displayHours = 0;


var interval = null;


var status = "stopped";


function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

   
   

    //Display updated time values to user
    document.getElementById("display").innerHTML =  displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById("display").innerHTML = "00:00";
    document.getElementById("startStop").innerHTML = "Start";

}

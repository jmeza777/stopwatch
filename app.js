const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";
// let play = document.querySelector('#play');
// let reset = documnet.querySelector('#reset');



function stopWatch() {

    seconds++

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++
        }
    }
    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if( minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped") {
        timerInterval =  window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="material-icons" id="pause">pause</i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="material-icons" id="play">play_arrow</i>`;
        timerStatus = "stopped";  
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})

// Variables to store split times
let splitTimes = [];


const splitButton = document.getElementById('splitBtn');
const splitTimesElement = document.getElementById('splitTimes');

// Event listener for split button
splitButton.addEventListener('click', () => {
  if (timerStatus === 'started') {
    const splitTime = document.getElementById('timer').innerText;
    splitTimes.push(splitTime);

    // Create a new list item and append it to the split times list
    const splitItem = document.createElement('li');
    splitItem.innerText = splitTime;
    splitTimesElement.appendChild(splitItem);
  }
});


const clearButton = document.getElementById('clearBtn');

// Event listener for clear button
clearButton.addEventListener('click', () => {
  splitTimes = []; // Clear the split times array
  splitTimesElement.innerHTML = ''; // Clear the split times list
});

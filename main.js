let timerId; // variable to store remaining time
let timeLeftElement = document.getElementById("timeLeft");

function startTimer() {
    if (timerId) { // stops the timer if it is already running
        clearInterval(timerId);
    }

    let hours = Number(document.getElementById("hoursInput").value); // getting numbers from input fields
    let minutes = Number(document.getElementById("minutesInput").value);
    let seconds = Number(document.getElementById("secondsInput").value);

    let timeLeft = (hours * 3600) + (minutes * 60) + seconds; // convert time to seconds

    timeLeftElement.textContent = formatTime(timeLeft); // without this the timer will update a second after the button is pressed
    timeLeft--;

    if (timeLeft != 0) { // if entered numbers are greater than 0
        timerId = setInterval(function () { // timer func
            if (timeLeft <= 0) {
                clearInterval(timerId);
                timeLeftElement.textContent = "00:00:00";
            } else {
                timeLeftElement.textContent = formatTime(timeLeft);
                timeLeft--;
            }
        }, 1000);

    } else {
        document.getElementById("timeLeft").textContent = "Enter time!";
    }
}

function resetTimer() {
    if (timerId) {
        clearInterval(timerId);
        timeLeftElement.textContent = "00:00:00";
    };
}

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

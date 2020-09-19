// Get all the elements
let currentTimeEl = document.getElementById("current-time");
let refreshTimeButton = document.getElementById("refresh-time")

// Implement all the functions
function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    
    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

function setCurrentTime() {
    currentTimeEl.innerHTML = getCurrentTime();
}

// Hook up all the events
refreshTimeButton.addEventListener("click", setCurrentTime);

// Code start
setCurrentTime();
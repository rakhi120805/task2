let timer = document.getElementById("timer");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let lapsDiv = document.getElementById("laps");
let clearLapsBtn = document.getElementById("clearLaps");

let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

startBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTimer, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    lapBtn.disabled = false;
    clearLapsBtn.disabled = false;
});

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.textContent = "0:00:00";
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
    clearLapsBtn.disabled = true;
    lapsDiv.innerHTML = '<div>Laps</div>';
});

lapBtn.addEventListener("click", () => {
    let lapTime = timer.textContent;
    let lapDiv = document.createElement("div");
    lapDiv.textContent = `Lap ${lapsDiv.children.length - 1}: ${lapTime}`;
    lapsDiv.appendChild(lapDiv);
});

clearLapsBtn.addEventListener("click", () => {
    lapsDiv.innerHTML = '<div>Laps</div>';
});

function startTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
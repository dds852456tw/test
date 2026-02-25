function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock();

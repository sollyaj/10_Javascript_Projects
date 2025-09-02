// Target date for countdown (you can change this to any future date)
const targetDate = new Date('Febuary 1, 2026 00:00:00').getTime();

// Select DOM elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

// Update the countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) {
        // Timer finished
        daysEl.textContent = '0';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const seconds = Math.floor(gap / 1000) % 60;
    const minutes = Math.floor(gap / (1000 * 60)) % 60;
    const hours = Math.floor(gap / (1000 * 60 * 60)) % 24;
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));

    // Update UI
    daysEl.textContent = days;
    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
return time < 10 ? `0${time}` : time;
}

// Call it once immediately, then every second
updateCountdown();
setInterval(updateCountdown, 1000);

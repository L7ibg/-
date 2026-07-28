document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('cover').classList.add('hidden');
});
let totalSeconds = 35 * 24 * 3600 + 4 * 3600 + 22 * 60 + 19;
function updateCountdown() {
    if (totalSeconds > 0) totalSeconds--;
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
let currentGuests = 0;
function adjustCount(amount) {
    currentGuests += amount;
    if (currentGuests < 0) currentGuests = 0;
    document.getElementById('guestCount').innerText = currentGuests;
}
function handleRSVP(event) {
    event.preventDefault();
    document.getElementById('rsvpForm').style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
}

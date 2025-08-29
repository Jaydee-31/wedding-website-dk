const targetDate = new Date("September 6, 2025 13:00:00").getTime();

const timeUnits = {
	days: 86400000,
	hours: 3600000,
	minutes: 60000,
	seconds: 1000,
};

const countdownElements = {
	days: document.getElementById("days"),
	hours: document.getElementById("hours"),
	minutes: document.getElementById("minutes"),
	seconds: document.getElementById("seconds"),
};

const progressCircles = document.querySelectorAll(".progress");

progressCircles.forEach((circle) => {
	const radius = circle.r.baseVal.value;
	const circumference = radius * 2 * Math.PI;
	circle.style.strokeDasharray = `${circumference} ${circumference}`;
	circle.style.strokeDashoffset = circumference;
});

function setProgress(circle, percent) {
	const radius = circle.r.baseVal.value;
	const circumference = radius * 2 * Math.PI;
	circle.style.strokeDashoffset = circumference - percent * circumference;
}

function updateCountdown() {
	const now = new Date().getTime();
	const distance = targetDate - now;

	if (distance < 0) {
		Object.values(countdownElements).forEach((el) => (el.textContent = "0"));
		return;
	}

	const days = Math.floor(distance / timeUnits.days);
	const hours = Math.floor((distance % timeUnits.days) / timeUnits.hours);
	const minutes = Math.floor((distance % timeUnits.hours) / timeUnits.minutes);
	const seconds = Math.floor((distance % timeUnits.minutes) / timeUnits.seconds);

	countdownElements.days.textContent = days;
	countdownElements.hours.textContent = hours;
	countdownElements.minutes.textContent = minutes;
	countdownElements.seconds.textContent = seconds;

	setProgress(progressCircles[0], days / 365);
	setProgress(progressCircles[1], hours / 24);
	setProgress(progressCircles[2], minutes / 60);
	setProgress(progressCircles[3], seconds / 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();

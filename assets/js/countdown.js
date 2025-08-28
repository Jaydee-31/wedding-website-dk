(function () {
	const pad = (n) => String(n).padStart(2, "0");
	const $ = (id) => document.getElementById(id);
	const daysEl = $("days");
	const hoursEl = $("hours");
	const minutesEl = $("minutes");
	const secondsEl = $("seconds");
	const deadlineText = $("deadlineText");
	const grid = $("grid");
	const statusEl = document.createElement("h5");

	let timerId = null;
	let target = new Date("2025-09-06T13:00:00");

	function updateDeadlineText() {
		const day = String(target.getDate()).padStart(2, "0");
		const month = String(target.getMonth() + 1).padStart(2, "0");
		const year = target.getFullYear();

		deadlineText.textContent = `${day}.${month}.${year}`;
	}

	function render(ms) {
		if (ms < 0) ms = 0;
		const totalSeconds = Math.floor(ms / 1000);
		const days = Math.floor(totalSeconds / 86400);
		const hours = Math.floor((totalSeconds % 86400) / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;
		daysEl.textContent = pad(days);
		hoursEl.textContent = pad(hours);
		minutesEl.textContent = pad(minutes);
		secondsEl.textContent = pad(seconds);
	}

	function tick() {
		const now = Date.now();
		const ms = target.getTime() - now;
		render(ms);
		if (ms <= 0) {
			clearInterval(timerId);
			timerId = null;
			statusEl.textContent = "🎉";
			grid.classList.add("done");
		}
	}

	function startCountdown() {
		clearInterval(timerId);
		grid.classList.remove("done");
		updateDeadlineText();
		tick();
		timerId = setInterval(tick, 1000);
	}

	startCountdown();
})();

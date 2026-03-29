(function () {
	var audio = document.getElementById("backgroundAudio");
	if (!audio) {
		return;
	}

	function tryPlayAudio() {
		var playPromise = audio.play();
		if (playPromise && typeof playPromise.catch === "function") {
			playPromise.catch(function () {
				// Autoplay may be blocked until a user interaction.
			});
		}
	}

	tryPlayAudio();

	function resumeOnFirstInteraction() {
		if (audio.paused) {
			tryPlayAudio();
		}
		document.removeEventListener("click", resumeOnFirstInteraction);
		document.removeEventListener("touchstart", resumeOnFirstInteraction);
		document.removeEventListener("keydown", resumeOnFirstInteraction);
	}

	document.addEventListener("click", resumeOnFirstInteraction, { passive: true });
	document.addEventListener("touchstart", resumeOnFirstInteraction, { passive: true });
	document.addEventListener("keydown", resumeOnFirstInteraction);
})();

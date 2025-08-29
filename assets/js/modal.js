window.onload = function () {
	const modal = document.getElementById("myModal");
	const modalContent = document.querySelector(".modal-content");
	const text = document.getElementById("modalText");
	const topClose = document.querySelector(".close");

	const params = new URLSearchParams(window.location.search);
	const guestName = params.get("name");
	const reservedSeats = params.get("num");

	if (guestName && reservedSeats) {
		text.innerHTML = `Hi <strong> ${guestName}</strong>, join us on our wedding day.<br>` + `<i class="fas fa-chair"></i> We’ve reserved <strong>${reservedSeats}</strong> seat(s) for you.`;
		modal.style.display = "block";
	}

	function closeModal() {
		modal.style.display = "none";
	}

	topClose.onclick = closeModal;

	// Close modal if clicked outside content
	modal.onclick = function (event) {
		if (!modalContent.contains(event.target)) {
			closeModal();
		}
	};
};

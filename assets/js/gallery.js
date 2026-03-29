function shuffleArray(array) {
	const arr = [...array];

	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
}

function populateGallerySlide() {
	var gallerySlide = document.querySelector(".gallery-slide");
	if (!gallerySlide) {
		return;
	}

	var imageNumbers = [];
	var totalImages = 51;

	for (var i = 1; i <= totalImages; i++) {
		imageNumbers.push(i);
	}

	imageNumbers = shuffleArray(imageNumbers);
	gallerySlide.innerHTML = "";

	imageNumbers.forEach(function (imageNumber) {
		var image = document.createElement("img");
		var localPath = "assets/img/gallery/image (" + imageNumber + ").jpg";

		image.src = encodeURI(localPath);
		image.alt = "Photo " + imageNumber;
		gallerySlide.appendChild(image);
	});
}

populateGallerySlide();

var copy = document.querySelector(".gallery-slide").cloneNode(true);
document.querySelector(".gallery").appendChild(copy);

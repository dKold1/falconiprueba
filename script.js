let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalImages = document.querySelectorAll('.slider-image').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSliderPosition();
}
function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 4000);

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

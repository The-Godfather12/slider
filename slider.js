const slider = document.getElementById("slider");
const slides = document.getElementById("slides");

let slideIndex = 0;
const slideWidth = slider.clientWidth;




//next button
function nextBtn() {
    slideIndex++;

    if (slideIndex > 5) {
        slideIndex = 0; 
    }

    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`
};

function PrevBtn() {
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = 5
    }

    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`
};

const slideImage = document.querySelectorAll(".gallary img");

let countSlideImage = 0;

const getImageSlide = (index) => {

    slideImage[countSlideImage].style.display = "none";
    countSlideImage = (index + slideImage.length) % slideImage.length;
    slideImage[countSlideImage].style.display = "block";
};

let nextButton = document.getElementById("next");

nextButton.addEventListener("click", changeView);

function changeView() {
    getImageSlide(countSlideImage + 1);
};

let previousButton = document.getElementById("prev");

previousButton.addEventListener("click", () => {
    getImageSlide(countSlideImage - 1)
});

getImageSlide(countSlideImage);
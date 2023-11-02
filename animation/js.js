const decan = document.querySelectorAll(".gallary img");
let justCountImage = 0;

function findImages(index) {
    decan[justCountImage].style.display = "none";
    justCountImage = (index + decan.length) % decan.length;
    decan[justCountImage].style.display = "block";

}
let nextButton = document.getElementById("next");

nextButton.addEventListener("click", Hello);

function Hello() {
    findImages(justCountImage + 1);
}

let previousButton = document.getElementById("prev");
previousButton.addEventListener("click", () => {
    findImages(justCountImage - 1);
})

findImages(justCountImage);
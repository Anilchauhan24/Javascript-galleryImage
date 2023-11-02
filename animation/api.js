
fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        let newData = "";
        data.map(item => {
            newData += `
            
            <div>

<img src="${item.image}">

            </div>
                    `
        })
        document.getElementById("gal").innerHTML = newData;

        const imageSlide = document.querySelectorAll(".gallary img");

        let countingImage = 0;

        function showImage(index) {
            imageSlide[countingImage].style.display = "none";
            countingImage = (index + imageSlide.length) % imageSlide.length;
            imageSlide[countingImage].style.display = "block";
        }

        let nextButton = document.getElementById("next");

        nextButton.addEventListener("click", () => {
            showImage(countingImage + 1);
        });
        let previousButton = document.getElementById("prev");

        previousButton.addEventListener("click", () => {
            showImage(countingImage - 1)
        });

        showImage(countingImage);





    });

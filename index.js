let secondOne = document.querySelector(".watchOne")
let minuteOne = document.querySelector(".watchTwo")
let hourOne = document.querySelector(".watchThree")
const cart = document.getElementById("cart");

function setTime() {
    const now = new Date();
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondOne.style.transform = `rotate(${secondDegree}deg)`;


    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + ((second / 60) * 30) + 90;
    minuteOne.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 6) + 90;
    hourOne.style.transform = `rotate(${hourDegree}deg)`;

}

function changeColor() {
    let myBody = document.body;
    myBody.classList.toggle("new")
}
;

async function fetchData() {
    const getData = await fetch(`https://fakestoreapi.com/products`)
    const newData = await getData.json();
    console.log(newData);
    let findData = "";
    newData.map((item) => {
        findData += ` <div class="cartimage">
        <img src="${item.image}" alt="image">
        <p>${item.category}</p>
        <button>${item.id}</button>
    </div>`
    })

    document.getElementById("para").innerHTML = findData;
}
fetchData()


findData.forEach(loop);

function loop(value, index) {

    console.log(value + ":" + index);

}

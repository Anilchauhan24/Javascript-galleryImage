function printText(data) {

    return `${data}`;

}

const newData = printText(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis officia totam quae beatae adipisci consequuntur repellat sequi! Perspiciatis suscipit quas ad? Vitae, aspernatur eaque quisquam nulla asperiores magni quo ipsa.
`)

const para = document.getElementById("abc");
para.innerHTML = newData;


const newHead = (heading) => {


    return `${heading}`;
}

const newHeading = newHead(`What is Doller?`);

const head = document.getElementById("abcd");

head.innerHTML = newHeading;
head.style.color = "red"



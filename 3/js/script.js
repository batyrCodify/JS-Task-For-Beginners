const btn = document.getElementById("button");
const body = document.querySelector("body");
const div = document.getElementById("div");
let now = new Date();

btn.addEventListener('click', plusDate);

function updateDateTime() {
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    div.innerHTML = `
        <h2>Date: ${day}.${month}.${year}</h2>
        <h2>Time: ${hours}:${minutes}</h2>
    `;
    body.prepend(div);
}

function plusDate() {
    now.setDate(now.getDate() + 1);
    updateDateTime();
}

updateDateTime();

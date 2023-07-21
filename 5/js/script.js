const btn = document.getElementById("btn");
const text = document.getElementById("text");
const body = document.body;

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const isLetter = Math.random() < 0.5;
        if (isLetter) {
            color += letters[Math.floor(Math.random() * letters.length)];
        } else {
            color += numbers[Math.floor(Math.random() * numbers.length)];
        }
    }
    return color;
}

function changeColor() {
    const randomColor = getRandomColor();
    text.textContent = randomColor;
    body.style.backgroundColor = randomColor;
}

btn.addEventListener("click", changeColor);
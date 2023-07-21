const square = document.getElementById("square");
square.addEventListener('mouseover', changeSquarePlace);

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function changeSquarePlace() {
    const marginLeft = getRandomNumber(0, 20);
    const marginTop = getRandomNumber(0, 20);
    square.style.marginLeft = `${marginLeft}px`;
    square.style.marginTop = `${marginTop}px`;
}

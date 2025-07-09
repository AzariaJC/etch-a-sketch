const container = document.querySelector("#container");
const numberOfSquares = 256;



for (let i = 0; i < numberOfSquares; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    container.appendChild(squareDiv)
}

const box = document.querySelector('square');

box.addEventListener("mouseover", () => {
    box.style.backgroundColor ="black";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "grey";
});
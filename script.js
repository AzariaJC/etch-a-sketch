const container = document.querySelector("#container");
let numberOfSquares = 16;



function generateSquares () {
    for (let i = 0; i < numberOfSquares ** 2; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    container.appendChild(squareDiv)
    squareDiv.style.backgroundColor = 'green';
    squareDiv.style.border = "2px solid black";
    squareDiv.style.display = "flex";
    squareDiv.style.flex = '1 1 calc((100/numberOfSquares) - 8px)';
    squareDiv.style.height = "50px";
}
};

const boxes = document.querySelectorAll('.square');

function changeBackground(e) {
    e.currentTarget.style.backgroundColor = "black";
};

boxes.forEach(function(box){
    box.addEventListener("mouseover", changeBackground);
});

const topButton = document.querySelector("#changeGrid");

topButton.addEventListener("click", changeGridSize);

function changeGridSize() {
    let newGridSizeInput = prompt("Please input how many rows of squares you would like:", "ex: 10 will give you a 10 x 10 grid");
    if (newGridSizeInput > 100) {
        alert("That number is too high! Pick a number 100 or less.");
    } else {
        numberOfSquares = newGridSizeInput;
        container.replaceChildren();
        generateSquares();
    }
};

generateSquares();
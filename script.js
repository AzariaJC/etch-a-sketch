function generateSquares(numberOfSquares, container) {
  for (let i = 0; i < numberOfSquares ** 2; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
    squareDiv.style.backgroundColor = "green";
    squareDiv.style.border = "2px solid black";
    squareDiv.style.display = "flex";
    squareDiv.style.flex = `1 1 calc(${100/numberOfSquares}% - 4px)`;
    squareDiv.addEventListener("mouseover", changeBackground);
  }
}

function changeGridSize() {
  let newGridSizeInput = prompt(
    "Please input how many rows of squares you would like:",
    "ex: 10 will give you a 10 x 10 grid"
  );
  let container = document.querySelector('#container');
  if (newGridSizeInput > 100) {
    alert("That number is too high! Pick a number 100 or less.");
  } else {
    container.replaceChildren();
    generateSquares(newGridSizeInput, container);
  }
}

function changeBackground(e) {
  e.currentTarget.style.backgroundColor = "black";
}

// ABOVE THIS LINE ARE ALL FUNCTIONS USED

const container = document.querySelector("#container");
const topButton = document.querySelector("#changeGrid");

topButton.addEventListener("click", changeGridSize);

generateSquares(16, container);

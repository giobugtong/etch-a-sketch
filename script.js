const gridContainer = document.querySelector("#grid-container");
const btnNew = document.querySelector("#btn-new");
const btnClear = document.querySelector("#btn-clear");
const btnDark = document.querySelector("#btn-dark");

window.addEventListener("load", defaultGrid());
btnNew.addEventListener("click", newGrid);
btnClear.addEventListener("click", removeColor);
btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function defaultGrid() {
    setGridSize(16);
    createGrid(16);
}

function setGridSize(size) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`;
}

function createGrid(grids) {
    for (let i = 0; i < grids * grids; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-item";
        gridElement.addEventListener("mouseover", addHover);
        gridContainer.appendChild(gridElement);
    }
  }

function addHover(e) {
    const randR = Math.floor(Math.random() * 256);
    const randG = Math.floor(Math.random() * 256);
    const randB = Math.floor(Math.random() * 256);
    if (randR % 25 == 0 || randG % 25 == 0 || randB % 25 == 0) {
            e.target.style.cssText = `background-color: black; transition: .2s`;
        } else {
            e.target.style.cssText = `background-color: rgb(${randR}, ${randG}, ${randB}); transition: .2s`;
        }
}
 
function newGrid() {
    let newSize = prompt("Enter new grid size:"); 
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize == 69) {
            alert("nice");
        } else if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Please enter a number from 1-64.");
            newGrid();
        } else {
            clearGrid();
            setGridSize(newSize);
            createGrid(newSize);
        }
    }
}

function clearGrid() {
   const gridArray = Array.from(gridContainer.childNodes);
   gridArray.forEach((element) => {
       gridContainer.removeChild(element);
   })
 }

function removeColor() {
    const gridArray = Array.from(gridContainer.childNodes);
gridArray.forEach((e) => {
    e.style.cssText = "background-color: white; transition: .2s"
    });
}

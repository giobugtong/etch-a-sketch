const gridContainer = document.querySelector("#grid-container");
const btnNew = document.querySelector("#btn-new");
const btnClear = document.querySelector("#btn-clear");
const btnDark = document.querySelector("#btn-dark");
const btnGray = document.querySelector("#btn-gray");
const btnRandom = document.querySelector("#btn-random");

window.addEventListener("load", defaultGrid());
btnNew.addEventListener("click", newGrid);
btnClear.addEventListener("click", removeColor);
btnDark.addEventListener("click", darkMode);
// btnDark.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
// });
btnGray.addEventListener("click", grayEtch);
btnRandom.addEventListener("click", randEtch);

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
        gridElement.addEventListener("mouseover", randColor);
        gridContainer.appendChild(gridElement);
    }
  }

function randColor(e) {
    const randR = Math.floor(Math.random() * 256);
    const randG = Math.floor(Math.random() * 256);
    const randB = Math.floor(Math.random() * 256);
    if (randR % 25 == 0 || randG % 25 == 0 || randB % 25 == 0) {
            e.target.style.cssText = `background-color: black; transition: .2s`;
        } else {
            e.target.style.cssText = `background-color: rgb(${randR}, ${randG}, ${randB}); transition: .2s`;
        }
}

function grayColor(e) {
    e.target.style.cssText = "background-color: gray; transition: .2s";
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

function darkMode() {
    if (btnDark.textContent === "dark mode") {
    document.body.style.cssText = "color: rgb(255, 252, 228); background-color: rgb(31, 30, 41); transition: background 0.2s linear;"
    //btnDark.style.cssText = "color: rgb(255, 252, 228); background-color: rgb(31, 30, 41); transition: background 0.2s linear;"
    btnDark.textContent = "light mode";
    } else if (btnDark.textContent === "light mode") {
    document.body.style.cssText = "background-color: rgb(255, 252, 228); color: rgb(31, 30, 41); transition: background 0.2s linear;"
    //btnDark.style.cssText = "background-color: rgb(255, 255, 255); color: rgb(31, 30, 41); transition: background 0.2s linear;"
    btnDark.textContent = "dark mode";
    }
}

function grayEtch() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((e) => e.removeEventListener("mouseover", randColor));
    gridArray.forEach((e) => e.addEventListener("mouseover", grayColor));
}
function randEtch() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((e) => e.removeEventListener("mouseover", grayColor));
    gridArray.forEach((e) => e.addEventListener("mouseover", randColor));
}
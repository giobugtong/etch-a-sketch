const gridContainer = document.querySelector("#grid-container");
function createGrid(rows, columns) {
    gridContainer.style.cssText = `grid-template-rows: repeat(${rows}, 1fr); grid-template-columns: repeat(${columns}, 1fr);`;
    for (let i = 0; i < rows * columns; i++) {
        gridContainer.innerHTML += '<div class="grid-item"></div>';
    }
  }
createGrid(16, 16);

const gridItems = document.querySelectorAll("#grid-container div");
function addHover(){
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mouseenter", function(){
            this.style.backgroundColor = "rgb(65, 65, 65)";
        });
    }
}
addHover()

const btnNew = document.querySelector("#btn-new");
btnNew.addEventListener("click", newGrid);

function newGrid() {
    let gridItems = document.querySelectorAll("#grid-container div");
    let newGrid = prompt("Enter new grid size:", ""); 
    if (newGrid > 100) {
        return alert("Grid is too big!");
    } else if (newGrid == null) {
        return;
    }

    // console.log(newGrid);
    // console.log(typeof parseInt(newGrid));

    for (let i = 0; i < gridItems.length; i++) {
        gridContainer.removeChild(gridItems[i]);
}
createGrid(newGrid, newGrid);
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].setAttribute("style", "background-color: none;");
 }
    for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseenter", function(){
        this.style.backgroundColor = "rgb(65, 65, 65)";
    });
}
}

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", clearGrid);

function clearGrid() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].setAttribute("style", "background-color: none;");
 }
}
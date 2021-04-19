function createGrid(rows, columns) {
    const gridContainer = document.getElementById("grid-container");

    for (let i = 0; i < rows * columns; i++) {
        gridContainer.innerHTML += '<div class="grid-item"></div>';
    }
}
createGrid(16, 16);
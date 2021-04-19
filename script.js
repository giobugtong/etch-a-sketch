function createGrid(rows, columns) {
    const gridContainer = document.querySelector("#grid-container");
   
    for (let i = 0; i < rows * columns; i++) {
        gridContainer.innerHTML += '<div class="grid-item"></div>';
    }
  }
createGrid(16, 16);

const gridItems = document.querySelectorAll("#grid-container div");

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseenter", function(){
        this.style.backgroundColor = "rgb(65, 65, 65)";
    });
}




// gridItems.addEventListener("mouseenter", function(){
//     gridItems.classList.add("hover-color");
// });
// gridItems.addEventListener("mouseleave", function(){
//     setTimeout(function()
//     {this.style.cssText = "background-color: none";
// }, 700);});
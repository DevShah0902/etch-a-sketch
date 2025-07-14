const container = document.querySelector("#container")

changeGridSize(16);
let size = 16
const changeSize = document.querySelector("#changeSize");
changeSize.addEventListener("click", () => {
    size = prompt("What size do you want to make the grid? (max: 100)");
    if (size > 0 && size <= 100){
        changeGridSize(size);
    }
});



function changeGridSize(size){

    const boxToRemove = document.querySelectorAll(".box")
    boxToRemove.forEach(box => {
        box.remove();
    })

    for (let i=0; i < size**2; i++){
    const box = document.createElement("div")
    box.classList.add("box")
    container.appendChild(box)

    container.style.setProperty("--gridSize", size);

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = "black"
    });

    }
    
}

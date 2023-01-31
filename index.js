const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status-text");
const reset = document.querySelector("#reset");

const winCondition =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer;
let cross = "cross";
let circle = "circle";
let running = false;

startGame();


function startGame(){
    currentPlayer = "X";
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    reset.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer} turn`;
    running = true;
}



function cellClicked() {
   
    const cellIndex = this.getAttribute("index");
    
    if(options[cellIndex] != "" || !running){
        return;
    }
    
    
    updateCell(this, cellIndex);
    
    checkWinner();

}

function updateCell(cell, index){
    console.log("funciona");
    options[index] = currentPlayer;
    cell.classList.add("cross");
    currentPlayer = "circle;"
    

}

function changePlayer() {

}

function checkWinner() {
   for (const i = 0; i < options.length; i++){
    if ()
   }
}

function restartGame() {

}
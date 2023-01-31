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
let currentPlayer = "X";
let running = false;

startGame();


function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    reset.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}



function cellClicked() {
   
    const cellIndex = this.getAttribute("index");
    console.log(cellIndex);
    if(options[index] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();

}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}

function changePlayer() {

}

function checkWinner() {

}

function restartGame() {

}
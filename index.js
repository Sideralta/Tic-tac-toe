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
let currentPlayer = 'cross'
let cross = "cross";
let circle = "circle";
let running = false;
let crossArr = [];
let circleArr = [];

startGame();
reset.addEventListener('click', restartGame);

function startGame(){
   
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
    console.log(index);
    options[index] = currentPlayer;
    
    cell.classList.add(currentPlayer);
    
    

}

/* function changePlayer() {

} */

function checkWinner() {
    console.log('me llamaron');
    
// Check if all the turns were made, if not change player and return to game
if(currentPlayer == 'cross'){
    currentPlayer = 'circle';
}
else if (currentPlayer == 'circle') {
    currentPlayer = 'cross';


}
    

   for (let i = 0; i < options.length; i++){
    
    if (options[i] == 'cross' ){
        crossArr.push(i);
    }
    else if (options[i] == 'circle'){
        circleArr.push(i);
    }
   }
   console.log(crossArr);
   console.log(circleArr);

   for (let i = 0; i < winCondition.length; i++){
    if (winCondition[i] == crossArr){
       winner('cross');
       
    }
    else if (winCondition[i] == circleArr){
        winner('circle');
     }

     else {
        
        return console.log('empate');
        
     }
   }
   console.log(crossArr);

}

function winner (player){
    return console.log(`${player} is the winner`);

}

function restartGame() {
    currentPlayer = 'cross';
    options = ["", "", "", "", "", "", "", "", ""];
    circleArr = [];
    crossArr = [];
    cells.forEach(function (cell){
        if (cell.classList.contains('cross')){
            cell.classList.remove('cross');
        }
        else {
            cell.classList.remove('circle');
        }
    }
        );



}
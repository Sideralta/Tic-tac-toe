const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status-text");
const reset = document.querySelector("#reset");

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "cross";
let cross = "cross";
let circle = "circle";
let running = false;

startGame();
reset.addEventListener("click", restartGame);

function startGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  reset.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer} turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("index");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);
  
  changePlayer();
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;

  cell.classList.add(currentPlayer);
}

function changePlayer() {
// Check if all the turns were made, if not change player and return to game
if (currentPlayer == "cross") {
    currentPlayer = "circle";
    statusText.textContent = `${currentPlayer} turn`;
  } else if (currentPlayer == "circle") {
    currentPlayer = "cross";
    statusText.textContent = `${currentPlayer} turn`;
  }
}

function checkWinner() {
  let crossArr = [];
  let circleArr = [];

  

  for (let i = 0; i < options.length; i++) {
    if (options[i] == "cross") {
      crossArr.push(i);
    } else if (options[i] == "circle") {
      circleArr.push(i);
    }
  }


  for (let i = 0; i < winCondition.length; i++) {
    let crossCount = 0;
    let circleCount = 0;


    for (let i = 0; i < winCondition.length; i++) {
        let cellsWinner = [];
      for (let j = 0; j < winCondition[i].length; j++) {
        
        for (let x = 0; x < crossArr.length; x++) {
            
          if (winCondition[i][j] == crossArr[x]) {
            
            crossCount++;
            cellsWinner.push(winCondition[i][j]);

            if (crossCount == 3) {
               
             
              return winner("cross", cellsWinner );
            }
          }
        }
      }
      crossCount = 0;
    }

    for (let i = 0; i < winCondition.length; i++) {
        let cellsWinner = [];
      for (let j = 0; j < winCondition[i].length; j++) {
        
        for (let x = 0; x < circleArr.length; x++) {
            
          if (winCondition[i][j] == circleArr[x]) {
            
            circleCount++;
            cellsWinner.push(winCondition[i][j]);

            if (circleCount == 3) {
               
             
              return winner("circle", cellsWinner );
            }
          }
        }
      }
      circleCount = 0;
    }

    return "Draw";
  }
}

function winner(player, cellsWinner) {
 alert(`${player} is the winner with ${cellsWinner}`);
  restartGame();
  showWinnners(player, cellsWinner);
  
    
  }




function restartGame() {
  currentPlayer = "cross";
  options = ["", "", "", "", "", "", "", "", ""];
  circleArr = [];
  crossArr = [];
  cells.forEach(function (cell) {
    if (cell.classList.contains("cross")) {
      cell.classList.remove("cross");
    } else {
      cell.classList.remove("circle");
    }
  });
}

function showWinnners (player, cellsWinner) {
    console.log('se llamooo');
    for (let i = 0; i > cellsWinner.length; i++){
       
        
        for (let j = 0; j > cells.length; j++){
            
            if(parseInt(cells[j].getAttribute('index')) == cellsWinner[i]){
                cells[j].classList.add(`${player}`);
                
            }
        }
        
}
console.log(cellsWinner.length);

console.log('pasoo el looop');
}

/* cells.forEach(function (cell) {
    console.log(cell.value);
    if (parseInt(cell.getAttribute("index")) == cellsWinner[i]) {
      cell.classList.add(`${player}`);
    } 
  }); */
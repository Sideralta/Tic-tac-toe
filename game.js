import {btn, app, selector, title, cells, statusText, reset, player, texts, symbols, winCondition, options, running } from "./main.js";
import {selectLanguage, languageSwitch} from "./language.js";

function startGame(language) {
  
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  reset.addEventListener("click", restartGame);
  statusText.textContent = texts.language.status;
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
  options[index] = player;

  cell.classList.add(currentPlayer);
}

function changePlayer() {
  // Check if all the turns were made, if not change player and return to game
  if (currentPlayer == "cross") {
    currentPlayer = "circle";
    statusText.textContent = `${player} turn`;
  } else if (currentPlayer == "circle") {
    currentPlayer = "cross";
    statusText.textContent = `${player} turn`;
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
              return winner("cross", cellsWinner);
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
              return winner("circle", cellsWinner);
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
  cells[cellsWinner[0]].classList.add(`${player}`);
  cells[cellsWinner[1]].classList.add(`${player}`);
  cells[cellsWinner[2]].classList.add(`${player}`);
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


export {startGame, cellClicked, updateCell, changePlayer, checkWinner,winner, restartGame};




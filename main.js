//---------------------------------------main---------------------------------------------
let currentPlayer = '';
let btn = document.querySelectorAll(".language");
const app = document.querySelector("#app");
const selector = document.querySelector("#language-box");
const modal = document.querySelector('#modal');
const winnerText = document.querySelector("#winner-text");
const newGameBtn = document.querySelector("#newGame");

const title = document.querySelector("#title");
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status-text");
const reset = document.querySelector("#reset");
let  language = '';


let texts = {
    español: {
        title: "Ta Te Ti",
        reset: "Resetear",
        status: "Es el turno de",
        win: "ES EL GANADOR!!",
        draw: "ES UN EMPATE!!"
    } ,
    english: {
        title: "Tic Tac Toe",
        reset: "Reset",
        status: `'s turn`,
        win: "IS THE WINNER!!",
        draw: "IS A DRAW!!"
    }
}

let symbols = {
  español: { cross: "cruz", circle: "circulo" },
  english: {cross: "cross", circle: "circle"}
};


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
let running = false;



reset.addEventListener("click", restartGame);


selectLanguage();

//------------------------------------------------Language----------------------------------------------------------

function selectLanguage(){
  modal.classList.add("hide");
app.classList.add("hide");
selector.classList.add("show");

  btn.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault;
        console.log("clicked");
        selector.classList.remove("show");
        selector.classList.add("hide");
        app.classList.remove("hide");
        if (this.innerHTML == "Español") {
          language = 'español';
        }
        else {
          language = 'english';
        }
        languageSwitch();
      });
    });

}



function languageSwitch() {
if (language == "español"){
  title.textContent = texts.español.title;
  reset.innerHTML = texts.español.reset;
  currentPlayer = symbols.español.cross;

}
else{
  title.textContent = texts.english.title;
  reset.innerHTML = texts.english.reset;
  currentPlayer = symbols.english.cross;
}
startGame();


}


//------------------------------------------------------------game-----------------------------------------------------


function startGame() {
  currentPlayer = symbols[language].cross;
  console.log(currentPlayer);
  
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  if (language == 'español'){
    statusText.textContent = `${texts[language].status} ${currentPlayer} `;
  }
  else {
    statusText.textContent = `${currentPlayer}${texts[language].status}`;
  }
  
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
  if (currentPlayer == 'cruz'){
    options[index] = symbols.english.cross;
    cell.classList.add(symbols.english.cross);

  }
  else if (currentPlayer == 'circulo'){
    options[index] = symbols.english.circle;
    cell.classList.add(symbols.english.circle);
  }
  else {
    options[index] = currentPlayer;
    cell.classList.add(currentPlayer);

  }
 
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
  else if (currentPlayer == "cruz"){
    currentPlayer = "circulo";
    statusText.textContent = `${texts[language].status} ${currentPlayer} `;
  }
  else if (currentPlayer == "circulo"){
    currentPlayer = "cruz";
    statusText.textContent = `${texts[language].status} ${currentPlayer} `;
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
              return winner();
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
              currentPlayer = symbols[language].circle;
              return winner();
            }
          }
        }
      }
      circleCount = 0;
    }
  
  }
  let count = 0;
  options.forEach(element => {
    if (element != ''){
      count ++;
    }
    
  });
  console.log(count);
  if (count == 9){
    draw();
  }

  
}

function winner() {
  winnerText.textContent = `${currentPlayer.toUpperCase()} ${texts[language].win}`;
  modal.classList.remove("hide");
  app.classList.add("hide");
  newGame();
}

function draw(){
  console.log("paso");
  winnerText.textContent = `${texts[language].draw}`;
  modal.classList.remove("hide");
  app.classList.add("hide");
  newGame();

}

function restartGame() {
  currentPlayer = "";
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
  startGame();

}

function newGame () {
  newGameBtn.addEventListener("click", function(e){
    e.preventDefault;
    selector.classList.remove('hide');
    restartGame();
    selectLanguage();
  })
}

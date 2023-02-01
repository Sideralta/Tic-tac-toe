import {selectLanguage, languageSwitch} from "./language.js";
import {startGame, cellClicked, updateCell, changePlayer, checkWinner,winner, restartGame} from "./game.js";
let currentPlayer = '';
let player;
let btn = document.querySelectorAll(".language");
const app = document.querySelector("#app");
const selector = document.querySelector("#language-box");

const title = document.querySelector("#title");
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status-text");
const reset = document.querySelector("#reset");


let texts = {
    español: {
        title: "Ta Te Ti",
        reset: "Resetear",
        status: `Es el turno de ${player}`
    } ,
    english: {
        title: "Tic Tac Toe",
        reset: "Reset",
        status: `${player} turn`
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

app.classList.add("hide");
selector.classList.add("show");

selectLanguage();


export {btn, app, selector, title, cells, statusText, reset, player, texts, symbols, winCondition, options, running };
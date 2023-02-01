import {btn, app, selector, title, cells, statusText, reset, player, texts, symbols, winCondition, options, running } from "./main.js";
import {startGame, cellClicked, updateCell, changePlayer, checkWinner,winner, restartGame} from "./game.js";


function selectLanguage(){
    btn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
          e.preventDefault;
          console.log("clicked");
          selector.classList.remove("show");
          selector.classList.add("hide");
          app.classList.remove("hide");
          if (this.innerHTML == "Español") {
            languageSwitch('español');
          }
          else {
            languageSwitch('english');
          }
        });
      });

}



function languageSwitch(lan) {
if (lan == "español"){
    title.textContent = texts.español.title;
    reset.innerHTML = texts.español.reset;
    player = symbols.español.cross;

}
else{
    title.textContent = texts.english.title;
    reset.innerHTML = texts.english.reset;
    player = symbols.english.cross;
}
  startGame(lan);


}


export {selectLanguage, languageSwitch};
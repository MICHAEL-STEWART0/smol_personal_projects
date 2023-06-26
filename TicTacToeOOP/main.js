const playingField = document.querySelector(".gameBoard");
const gameCells = document.querySelectorAll(".gameCell");
const gameRules = {
  turn: 0, // x = 0, y = 1. x goes first.
  currentPlayerLetter: `x`, //default to x
  placedSuccesfully: false,
  setPlayerLetter: function (playerTurn) {
    if (playerTurn === 0) {
      this.currentPlayerLetter = `x`.toUpperCase();
    } else {
      this.currentPlayerLetter = `o`.toUpperCase();
    }
  },
  updateBoardGameCells: function (e, playerTurn) {
    if (e.target.innerHTML === "") {
      e.target.innerHTML = `${this.currentPlayerLetter}`;
      this.placedSuccesfully = true;
    } else {
      alert(`cell not empty`);
      this.placedSuccesfully = false;
    }
    if (this.placedSuccesfully === true) {
      this.updatePlayerTurn(this.turn);
    }
    this.setPlayerLetter(this.turn);
  },
  updatePlayerTurn: function (playerTurn) {
    if (playerTurn === 0) {
      this.turn = ++playerTurn;
    } else this.turn = 0;
  },
};

function createGameBoard(gameRules, gameCells) {
  this.gameRules = gameRules;
  this.gameCells = gameCells;
  gameCells.forEach((el) => {
    el.addEventListener("click", function (e) {
      gameRules.updateBoardGameCells(e, gameRules.turn);
    });
  });
}

const ticTacToeGame = new createGameBoard(gameRules, gameCells);

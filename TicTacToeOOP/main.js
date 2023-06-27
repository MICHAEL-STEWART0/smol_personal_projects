const playingField = document.querySelector(".gameBoard");
const gameCells = document.querySelectorAll(".gameCell");

const gameRules = {
  turn: 0, // x = 0, y = 1. x goes first.
  currentPlayerLetter: `x`, //default to x
  placedSuccesfully: false,
};

function createGameBoard(gameRules, gameCells) {
  this.gameRules = gameRules;
  this.gameCells = gameCells;
  gameCells.forEach((el) => {
    el.addEventListener("click", (e) => {
      this.updateBoardGameCells(e, gameRules.turn);
    });
  });

  this.setPlayerLetter = function (playerTurn) {
    if (playerTurn === 0) {
      this.gameRules.currentPlayerLetter = `x`.toUpperCase();
    } else {
      this.gameRules.currentPlayerLetter = `o`.toUpperCase();
    }
  };

  this.updateBoardGameCells = function (e, playerTurn) {
    if (e.target.innerHTML === "") {
      e.target.innerHTML = `${this.gameRules.currentPlayerLetter}`;
      this.gameRules.placedSuccesfully = true;
    } else {
      alert(`cell not empty`);
      this.gameRules.placedSuccesfully = false;
    }
    if (this.gameRules.placedSuccesfully === true) {
      this.updatePlayerTurn(this.gameRules.turn);
    }
    this.setPlayerLetter(this.gameRules.turn);
  };

  this.updatePlayerTurn = function (playerTurn) {
    if (playerTurn === 0) {
      this.gameRules.turn = ++playerTurn;
    } else this.gameRules.turn = 0;
  };
}

const ticTacToeGame = new createGameBoard(gameRules, gameCells);

// TO DO, ADD CHECKWIN LOGIC. use nodelist to compare matrix values

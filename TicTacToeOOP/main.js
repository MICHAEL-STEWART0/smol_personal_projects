const playingField = document.querySelector(".gameBoard");
const gameCells = document.querySelectorAll(".gameCell");
const playerWinField = document.getElementById("playerWinField");

const gameRules = {
  turn: 0, // x = 0, y = 1. x goes first.
  currentPlayerLetter: `X`, //default to x
  placedSuccesfully: false,
};

function createGameBoard(gameRules, gameCells) {
  this.gameRules = gameRules;
  this.gameCells = gameCells;

  gameCells.forEach((el) => {
    el.addEventListener("click", (e) => {
      this.updateBoardGameCells(e);
    });
  });

  this.setPlayerLetter = function (playerTurn) {
    if (playerTurn === 0) {
      this.gameRules.currentPlayerLetter = `X`;
    } else {
      this.gameRules.currentPlayerLetter = `O`;
    }
  };

  this.updateBoardGameCells = function (e) {
    if (playerWinField.textContent !== "") {
      return;
    }
    if (e.target.innerHTML === "") {
      e.target.innerHTML = `${this.gameRules.currentPlayerLetter}`;
      this.gameRules.placedSuccesfully = true;
    } else {
      alert(`cell not empty`);
      return;
    }

    this.updatePlayerTurn(this.gameRules.turn);
    this.setPlayerLetter(this.gameRules.turn);
    this.checkWin();
  };

  this.updatePlayerTurn = function (playerTurn) {
    if (playerTurn === 0) {
      this.gameRules.turn = ++playerTurn;
    } else this.gameRules.turn = 0;
  };

  this.checkWin = function () {
    for (let i = 0; i < 3; i++) {
      let x = "";
      for (let j = 0; j < 3; j++) {
        //horizontal check
        x += gameCells.item(j + i * 3).textContent;
      }
      if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
        x === "xxx".toUpperCase()
          ? (playerWinField.innerHTML = `X wins`)
          : (playerWinField.innerHTML = `O wins`);
      }
      x = "";
      for (let k = 0; k < 3; k++) {
        //vertical check
        x += gameCells.item(k * 3 + i).textContent;
      }
      if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
        x === "xxx".toUpperCase()
          ? (playerWinField.innerHTML = `X wins`)
          : (playerWinField.innerHTML = `O wins`);
      }
    }
    let x = "";
    for (let i = 0; i <= 8; i += 4) {
      x += gameCells.item(i).textContent; // everything below is diagonal check
    }
    if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
      x === "xxx".toUpperCase()
        ? (playerWinField.innerHTML = `X wins`)
        : (playerWinField.innerHTML = `O wins`);
    }
    x = "";
    for (let i = 2; i <= 6; i += 2) {
      x += gameCells.item(i).textContent;
    }
    if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
      x === "xxx".toUpperCase()
        ? (playerWinField.innerHTML = `X wins`)
        : (playerWinField.innerHTML = `O wins`);
    }
    console.log(playerWinField.textContent);
  };
}

const ticTacToeGame = new createGameBoard(gameRules, gameCells);

const gameBox = document.querySelectorAll(".gameBox");
const nameInputField = document.getElementById("PlayerName");
const submitNameButton = document.getElementById("submitNameButton");
const playerWinField = document.getElementById("playerWinField");

gameBox.forEach((el, index) =>
  el.addEventListener("click", () => updateBoardCell(gameBox.item(index)))
);
submitNameButton.addEventListener("click", updatePlayerNames);

function updatePlayerNames() {
  //Function that updates name based on checking field defaults.
  if (player1.innerText === "player 1") {
    player1.innerText = nameInputField.value;
  } else if (player2.innerText === "player 2") {
    player2.innerText = nameInputField.value;
  } else {
    alert("Both players have a name");
  }
}

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let playerTurn = 0; // player 1 is 0, player 2 is 1
let playerLetter = "X";

function choosingPlayerLetter() {
  // if player turn is === 0 then letter to write is x. Otherwise playerletter is o
  playerTurn === 0 ? (playerLetter = "X") : (playerLetter = "O");
}

function updateBoardCell(cellIndex) {
  // take player turn into consideration
  choosingPlayerLetter();

  // if the box is empty then allow player to make a choice
  if (cellIndex.innerText === "") {
    cellIndex.innerText = playerLetter;
  } else return;

  //update the player turn if turn is 0 incrament, if turn is 1 decrament
  playerTurn === 0 ? playerTurn++ : playerTurn--;
  checkWin();
}

function checkWin() {
  //update playerwin field : next win check

  for (let i = 0; i < 3; i++) {
    //counter
    let x = "";
    for (let j = 0; j < 3; j++) {
      //horizontal check
      x += gameBox.item(j + i * 3).textContent;
    }
    if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
      x === "xxx".toUpperCase()
        ? (playerWinField.innerHTML = `${player1.textContent} wins`)
        : (playerWinField.innerHTML = `${player2.textContent} wins`);
    }
    x = "";
    for (let k = 0; k < 3; k++) {
      //vertical check
      x += gameBox.item(k * 3 + i).textContent;
    }
    if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
      x === "xxx".toUpperCase()
        ? (playerWinField.innerHTML = `${player1.textContent} wins`)
        : (playerWinField.innerHTML = `${player2.textContent} wins`);
    }
  }
  let x = "";
  for (let i = 0; i <= 8; i += 4) {
    x += gameBox.item(i).textContent; // everything below is diagonal check
  }
  if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
    x === "xxx".toUpperCase()
      ? (playerWinField.innerHTML = `${player1.textContent} wins`)
      : (playerWinField.innerHTML = `${player2.textContent} wins`);
  }
  x = "";
  for (let i = 2; i <= 6; i += 2) {
    x += gameBox.item(i).textContent;
  }
  if (x === "xxx".toUpperCase() || x === "ooo".toUpperCase()) {
    x === "xxx".toUpperCase()
      ? (playerWinField.innerHTML = `${player1.textContent} wins`)
      : (playerWinField.innerHTML = `${player2.textContent} wins`);
  }
}

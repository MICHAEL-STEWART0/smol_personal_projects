// this is still a WIP
const buttons = {
  primaryButton: document.querySelectorAll(".primaryButton"),
  secondaryButton: document.querySelectorAll(".secondaryButton"),
  clearButton: document.querySelector("#clearButton"),
  equalButton: document.querySelector("#equalButton"),
  ancillaryButton: document.querySelectorAll(".ancilliaryButton"),
};

const DisplayFields = {
  resultField: document.querySelector(".calculator-result"),
  userEnteredDataField: document.querySelector(
    ".calculator-userEnteredData--displayField"
  ),
};

// handles firing up the event listeners for all of the buttons
for (let button in buttons) {
  if (buttons[button].length !== undefined) {
    buttons[button].forEach((el) =>
      el.addEventListener("click", function (e) {
        console.log(e.target.innerHTML); //TODO: pass target into function that handles data
      })
    );
  } else {
    buttons[button].addEventListener("click", function (e) {
      console.log(e.target.innerHTML); //TODO: pass target into function that handles data
    });
  }
}

// need to handle multiple operators, every time an operator is used add it to a queue and use it then remove it from the array

// Function(`return ${document.querySelector('.calculator-userEnteredData--displayField').innerHTML})()

// permited values[0,1,2,3,4,5,6,8,9]

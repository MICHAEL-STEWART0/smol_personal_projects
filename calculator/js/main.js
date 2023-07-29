// this is still a WIP
class Calculator {
  constructor() {
    this.buttons = {
      primaryButton: document.querySelectorAll(".primaryButton"),
      secondaryButton: document.querySelectorAll(".secondaryButton"),
      clearButton: document.querySelector("#clearButton"),
      equalButton: document.querySelector("#equalButton"),
      ancillaryButton: document.querySelectorAll(".ancilliaryButton"),
    };

    this.displayFields = {
      resultField: document.querySelector(".calculator-result"),
      userEnteredDataField: document.querySelector(
        ".calculator-userEnteredData--displayField"
      ),
    };

    this.operate = {
      getValues: () => {
        let regex = /[+\-*/%]/g; //regex for spliting numbers based on operators
        return [
          this.displayFields.userEnteredDataField.innerHTML
            .split(regex)
            .map((n) => Number(n)),
          this.displayFields.userEnteredDataField.innerHTML
            .split("")
            .filter((el) => !`1234567890`.includes(el)),
        ];
      },
      add(...n) {},
    };
  }
}

const calculator = new Calculator();

// handles firing up the event listeners for all of the buttons
for (let button in calculator.buttons) {
  if (calculator.buttons[button].length !== undefined) {
    calculator.buttons[button].forEach((el) =>
      el.addEventListener("click", function (e) {
        console.log(e.target.innerHTML); //TODO: pass target into function that handles data
      })
    );
  } else {
    calculator.buttons[button].addEventListener("click", function (e) {
      console.log(e.target.innerHTML); //TODO: pass target into function that handles data
    });
  }
}

// need to handle multiple operators, every time an operator is used add it to a queue and use it then remove it from the array

// handle operator conversion using an iife Function() or eval() --note eval not recommended. better to use a function constructor and pass the body of the function and immediately invoke it to recieve a value

// Function(`return ${document.querySelector('.calculator-userEnteredData--displayField').innerHTML})()

// permited values[0,1,2,3,4,5,6,8,9]

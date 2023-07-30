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
        return this.displayFields.userEnteredDataField.innerHTML;
      },
      calculate(expression) {
        if (expression !== undefined) {
          return eval(expression);
        } else {
          return "Please enter a valid expression";
        }
      },
      invertValue(n) {
        return n * -1;
      },
    };

    this.updateFields = {
      updateUserEnteredDataField: (data) => {
        this.displayFields.userEnteredDataField.textContent += data;
      },
      updateResultField: (data = 0) => {
        this.displayFields.resultField.textContent = data;
      },
      clearDisplayfields: () => {
        this.displayFields.userEnteredDataField.textContent = "";
        this.displayFields.resultField.textContent = "0";
      },
      deleteLastInput: () => {
        let arrOfChars =
          this.displayFields.userEnteredDataField.textContent.split("");
        this.displayFields.userEnteredDataField.textContent = "";
        arrOfChars.pop();
        this.updateFields.updateUserEnteredDataField(arrOfChars.join(""));
      },
    };
  }
}

const calculator = new Calculator();

// handles firing up the event listeners for all of the buttons
for (let button in calculator.buttons) {
  if (calculator.buttons[button].length !== undefined) {
    calculator.buttons[button].forEach((el) =>
      el.addEventListener("click", function (e) {
        if (
          !!e.target.attributes.id &&
          e.target.attributes.id.textContent === "invertNum"
        ) {
          calculator.updateFields.updateResultField(
            String(
              calculator.operate.invertValue(
                Number(calculator.displayFields.resultField.textContent)
              )
            )
          );
        } else if (
          !!e.target.attributes.id &&
          e.target.attributes.id.textContent === "del"
        ) {
          calculator.updateFields.deleteLastInput();
        } else {
          calculator.updateFields.updateUserEnteredDataField(
            e.target.innerHTML
          );
        }
      })
    );
  } else {
    calculator.buttons[button].addEventListener("click", function (e) {
      if (e.target.attributes.id.textContent === "clearButton") {
        calculator.updateFields.clearDisplayfields();
      } else if (e.target.attributes.id.textContent === "equalButton") {
        calculator.updateFields.updateResultField(
          calculator.operate.calculate(calculator.operate.getValues())
        );
      }
    });
  }
}

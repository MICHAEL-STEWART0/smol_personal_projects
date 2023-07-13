const displayFields = {
  drinkNameDisplayField: document.querySelector("#drinkDisplayField"),
  drinkImageDisplayField: document.querySelector("#drinkImgDisplayField"),
  drinkIngredientDisplayField: document.querySelector("#drinkIngredientList"),
  drinkInstructionDisplayField: document.querySelector(
    "#instructionsToMakeDrink"
  ),

  startEventListners() {
    buttons.fetchUserDrinkButton.addEventListener("click", function (e) {
      fetchDrink(e.target.id);
    });
    buttons.fetchRandomDrinkButton.addEventListener("click", fetchDrink);
    inputFields.drinkSearchField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        fetchDrink(e.code);
      }
    });
  },

  updateFieldsWithUserChoice(closestMatchedDrink) {
    this.resetErrorStyling();
    this.updateDrinkNameField(closestMatchedDrink);
    this.updateDrinkImageField(closestMatchedDrink);
    this.clearIngredientListItems();
    this.clearInstructionField();
    this.updateDrinkIngredientField(closestMatchedDrink);
    this.updateDrinkInstructionField(closestMatchedDrink);
  },

  updateDrinkNameField(closestMatchedDrink) {
    this.drinkNameDisplayField.textContent = closestMatchedDrink.strDrink;
  },

  updateDrinkImageField(closestMatchedDrink) {
    this.drinkImageDisplayField.src = closestMatchedDrink.strDrinkThumb;
  },

  updateDrinkIngredientField(closestMatchedDrink) {
    for (let i = 1; i <= 15; i++) {
      if (closestMatchedDrink[`strIngredient` + i.toString()] === null) {
        break;
      }
      displayFields.drinkIngredientDisplayField.appendChild(
        document.createElement(`li`)
      ).textContent = closestMatchedDrink[`strIngredient` + i.toString()];
    }
  },

  updateWithNoResult() {
    this.drinkImageDisplayField.src = "";
    this.drinkNameDisplayField.style.color = "red";
    this.drinkNameDisplayField.textContent = "NotFound";
    this.clearIngredientListItems();
    this.clearInstructionField();
  },

  updateDrinkInstructionField(closestMatchedDrink) {
    console.log(closestMatchedDrink.strInstructions.split(". "));

    closestMatchedDrink.strInstructions.split(". ").forEach((sentance) => {
      this.drinkInstructionDisplayField.appendChild(
        document.createElement(`li`)
      ).textContent = sentance;
    });
  },

  resetErrorStyling() {
    this.drinkNameDisplayField.style.color = "black";
  },

  clearIngredientListItems() {
    this.drinkIngredientDisplayField.innerHTML = "";
  },

  clearInstructionField() {
    this.drinkInstructionDisplayField.innerHTML = "";
  },
};

const buttons = {
  fetchUserDrinkButton: document.querySelector("#userDrinkButton"),
  fetchRandomDrinkButton: document.querySelector("#randomDrinkButton"),
};

const inputFields = {
  drinkSearchField: document.querySelector("input"),
};

displayFields.startEventListners();

async function fetchDrink(userGeneratedEvent) {
  let userChoice = inputFields.drinkSearchField.value;

  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userChoice;

  const response = await fetch(url);
  const data = await response.json();
  const drinks = data.drinks;
  if (drinks === null) {
    displayFields.updateWithNoResult();
    return;
  }

  if (
    userGeneratedEvent === "userDrinkButton" ||
    userGeneratedEvent === "Enter"
  ) {
    // do something with user drink choice
    const closestMatchedDrink = drinks[0];
    if (userChoice === "") {
      displayFields.updateWithNoResult();
      return;
    }
    displayFields.updateFieldsWithUserChoice(closestMatchedDrink);
  } else {
    //do something with random drink
    const randomDrink = drinks[getRandomNumber(0, drinks.length - 1)];
    displayFields.updateFieldsWithUserChoice(randomDrink);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

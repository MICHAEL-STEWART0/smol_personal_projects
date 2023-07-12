const displayFields = {
  drinkNameDisplayField: document.querySelector("#drinkDisplayField"),
  imageDisplayField: document.querySelector("#drinkImgDisplayField"),
  ingredientDisplayField: document.querySelector("#drinkIngredientList"),
  instructionDisplayField: document.querySelector("#instructionsToMakeDrink"),

  updateFieldWithNoResult() {
    this.drinkNameDisplayField.style.color = "red";
    this.drinkNameDisplayField.textContent = "Not Found";
    this.imageDisplayField.style.display = "none";
  },

  setDrinkName(drink) {
    this.drinkNameDisplayField.textContent = drink.strDrink;
  },

  updateFieldWithResult(data) {
    let drink = data.drinks[0];
    this.setDrinkName(drink);
    this.imageDisplayField.setAttribute("src", `${drink.strDrinkThumb}`); //set photo src
    this.imageDisplayField.style.width = "20vw";
    this.imageDisplayField.style.borderRadius = "10px";
    this.imageDisplayField.setAttribute(
      //set alt
      `alt`,
      `A picture of a ${drink.strDrink}`
    );
    this.updateInstructions(data); //set instruction list items
  },

  updateFieldWithRandomResult(data) {
    let drink = data.drinks[getRandomNumber(0, 24)];
    this.drinkNameDisplayField.textContent = drink.strDrink;
    this.imageDisplayField.setAttribute("src", `${drink.strDrinkThumb}`);
    this.imageDisplayField.setAttribute(
      `alt`,
      `A picture of a ${drink.strDrink}`
    );
  },

  resetStyling() {
    this.drinkNameDisplayField.style.color = "black";
    this.drinkNameDisplayField.style.textAlign = "center";
    this.imageDisplayField.style.display = null;
    this.clearListItems();
  },

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

  updateInstructions(data) {
    let drink = data.drinks[0];
    for (let i = 1; i < 15; i++) {
      if (drink[`strIngredient` + i] === null) {
        break;
      }
      this.ingredientDisplayField.appendChild(
        document.createElement(`li`)
      ).textContent = drink[`strIngredient` + i];
    }
  },

  clearListItems() {
    this.ingredientDisplayField.innerHTML = "";
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

function fetchDrink(userGeneratedEvent) {
  const choice = inputFields.drinkSearchField.value;
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + choice;

  if (
    userGeneratedEvent === "userDrinkButton" ||
    userGeneratedEvent === "Enter"
  ) {
    fetch(url)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        /* if the search field is empty or the resonse 
        has no drink update field with no result */
        if (inputFields.drinkSearchField.value === "" || data.drinks === null) {
          displayFields.updateFieldWithNoResult();
          displayFields.clearListItems();
          return;
        } else if (data.drinks !== null) {
          /* if there is a present drink reset 
          styling to from previous errors */
          displayFields.resetStyling();
        }
        displayFields.updateFieldWithResult(data);
      })
      .catch((err) => {
        alert(`error ${err}`);
      });
  } else {
    fetch(url)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        displayFields.resetStyling();
        displayFields.updateFieldWithRandomResult(data);
      })
      .catch((err) => {
        alert(`${err}`);
      });
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const displayFields = {
  drinkNameDisplayField: document.querySelector("h2"),
  imageDisplayField: document.querySelector("img"),
  instructionDisplayField: document.querySelector("h3"),

  updateFieldWithNoResult() {
    displayFields.drinkNameDisplayField.style.color = "red";
    displayFields.drinkNameDisplayField.textContent = "Not Found";
    displayFields.imageDisplayField.style.display = "none";
  },
  updateFieldWithResult(data) {
    let drink = data.drinks[0];
    displayFields.drinkNameDisplayField.textContent = drink.strDrink;
    displayFields.imageDisplayField.setAttribute(
      "src",
      `${drink.strDrinkThumb}`
    );
    displayFields.imageDisplayField.setAttribute(
      `alt`,
      `A picture of a ${drink.strDrink}`
    );
  },

  updateFieldWithRandomResult(data) {
    let drink = data.drinks[getRandomNumber(0, 24)];
    displayFields.drinkNameDisplayField.textContent = drink.strDrink;
    displayFields.imageDisplayField.setAttribute(
      "src",
      `${drink.strDrinkThumb}`
    );
    displayFields.imageDisplayField.setAttribute(
      `alt`,
      `A picture of a ${drink.strDrink}`
    );
  },
  resetStyling() {
    displayFields.drinkNameDisplayField.style.color = "black";
    displayFields.drinkNameDisplayField.style.textAlign = "center";
    displayFields.imageDisplayField.style.display = null;
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
        console.log(data);
        /* if the search field is empty or the resonse 
        has no drink update field with no result */
        if (inputFields.drinkSearchField.value === "" || data.drinks === null) {
          displayFields.updateFieldWithNoResult();
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
        console.log(data);
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

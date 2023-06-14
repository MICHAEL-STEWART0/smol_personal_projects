/*prompt 

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

//solution

function alphabetPosition(text) {
  // will be used later to store the value of the letters.
  let result = [];

  //create obj
  let obj = {};
  //create str to hold alphabet to iterate and assign to obj later
  let str = `abcdefghijklmnopqrstuvwxyz`;
  //for loop will grab the letter at i index of str and assign it to strs
  //create a property of obj and assign it a position of i+1
  for (let i = 0; i < str.length; i++) {
    let strs = str[i];
    obj[strs] = i + 1;
  }

  //split  the input into an array of words, rejoin and split to array of chars
  let arrOfChars = text.toLowerCase().split(" ").join("").split("");

  //check if the current letter is in obj, if it is not it will returned undefined.
  //as long as the value is NOT undefined push the value of that letter to the result arr
  for (let i = 0; i < text.length; i++) {
    if (obj[arrOfChars[i]] !== undefined) {
      result.push(obj[arrOfChars[i]]);
    }
  }
  //wrap result in string obj and return
  return String(result.join(" "));
}

//tests

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      alphabetPosition("The sunset sets at twelve o' clock."),
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
    Test.assertEquals(
      alphabetPosition("The narwhal bacons at midnight."),
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
    );
  });
});

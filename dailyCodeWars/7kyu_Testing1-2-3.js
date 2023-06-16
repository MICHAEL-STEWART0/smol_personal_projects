/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

//solution

var number = function (array) {
  if (array.length == 0) {
    return [];
  }
  let arr = [];
  for (let i = 1; i <= array.length; i++) {
    let value = array[i - 1];
    arr.push(`${i}: ${value}`);
  }
  return arr;
};

//function call for testing

number(["a", "b", "c"]); // expected ["1: a", "2: b", "3: c"]

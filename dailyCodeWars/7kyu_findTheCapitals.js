/*
https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript


Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
  //split the str into an arr of chars and search the array to see if the el === el.toUpperCase()
  // and push the index to an array and return it
  let arrOfChar = word.split("");
  let answer = [];

  arrOfChar.forEach((el, i) =>
    el === el.toUpperCase() ? answer.push(i) : null
  );
  return answer;
};

//function call for testing
capitals("CodEWaRs"); //expected [0, 3, 4, 6]

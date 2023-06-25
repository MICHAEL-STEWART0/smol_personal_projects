/*https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

// solution

function findAverage(array) {
  return array.reduce((a, c) => a + c, 0) / array.length;
}

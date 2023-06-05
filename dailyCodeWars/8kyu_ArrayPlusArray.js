/*prompt below, 
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

//Solution 1, normal function for hoisting access.

function arrayPlusArray(arr1, arr2) {
  //spread values of both arrays, reduce the array to a number then return.
  return [...arr1, ...arr2].reduce((total, current) => total + current, 0);
}

//function call for test
arrayPlusArray([1, 2, 3], [4, 5, 6]);

//Solution 2, function expression (same functionality just a different way of doing it.)

//spread values of both arrays, reduce the array to a number then return.
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((total, current) => total + current, 0);

//function call for test
arrayPlusArray([1, 2, 3], [4, 5, 6]);

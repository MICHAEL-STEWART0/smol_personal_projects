/*Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

//solution

//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
let array = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split("");
function reverseArray(arr) {
  return arr.map((_, i, array) => {
    return array[arr.length - 1 - i];
  });
}

//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = array[i];
    array[i] = array[arr.length - 1 - i];
    array[arr.length - 1 - i] = temp;
  }
  return arr;
}

let reversedArr = reverseArrayInPlace(array);

console.log(reversedArr);

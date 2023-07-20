/*Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P' */

//solution
function findMissingLetter(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  let range = [
    alphabet.indexOf(array[0]),
    alphabet.indexOf(array[array.length - 1]),
  ];

  for (; range[0] < range[1]; range[0]++) {
    if (!array.includes(alphabet[range[0]])) {
      return alphabet[range[0]];
    }
  }
}

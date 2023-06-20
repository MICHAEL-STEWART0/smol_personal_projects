/*
https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp. */

//solution

function comp(array1, array2) {
  //handle invalid inputs
  if (array1 === null || array1 === [] || array2 === null || array2 === []) {
    return false;
  } else if (array1.length === 0 && array2.length === 0) {
    return true;
  } else if (array1 === null && array2 === null) {
    return false;
  }
  /* */

  let arrayOfProofs = [];
  //since the arrays will allways be the same length, we can sort them for easier comparison so i dont have to keep track of uniques
  let sortedArray1Ascending = array1.sort((a, b) => a - b);
  let sortedArray2Ascending = array2.sort((a, b) => a - b);

  for (let i = 0; i < array2.length; i++) {
    let array1ElSquared = sortedArray1Ascending[i] ** 2; //done to check if the element is equal to the passed value in arr2

    if (array1ElSquared === sortedArray2Ascending[i]) {
      // if the values are equal push true
      arrayOfProofs.push(true);
    } else arrayOfProofs.push(false); // otherwise push false beacuse we now know the arrays are not the same interms of multiplicities
  }

  return arrayOfProofs.includes(false) ? false : true; //if the array includes false it is proven that the arrays are infact not the same when you square the elements.
}

//unit testing

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
comp(a1, a2);

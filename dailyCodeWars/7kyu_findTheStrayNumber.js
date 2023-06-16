/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

function stray(numbers) {
  //sort the arr in order to make it obvious which is the element that is the outlier.
  let sortedArr = numbers.sort();

  //if the first el is eqaul to the second el return the last el in the arr because that will be the outlier,
  //otherwise return the first
  return sortedArr[0] === sortedArr[1]
    ? sortedArr[sortedArr.length - 1]
    : sortedArr[0];
}

//function call for testing

stray([1, 1, 2]); // 2 expected
stray([2, 1, 2]); // 1 expected

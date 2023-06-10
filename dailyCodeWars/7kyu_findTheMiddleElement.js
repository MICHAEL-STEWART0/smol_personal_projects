/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

//solution (I have 2 solutions, a Brute force dumb way of solving this by checking all possible combinations)
// and the smart way of using iterations and math to ensure i dont wrap outside of the bounds of the array

//solution 1,

function gimme(triplet) {
  // iterate through the array and compare values at position of i, % 3 is to wrap arround the element to ensure you never iterate out of bounds
  for (let i = 0; i < triplet.length; i++) {
    console.log(i % 3);
    if (
      triplet[i] > triplet[(i + 1) % 3] &&
      triplet[i] < triplet[(i + 2) % 3]
    ) {
      return i;
    }
    if (
      triplet[i] < triplet[(i + 1) % 3] &&
      triplet[i] > triplet[(i + 2) % 3]
    ) {
      return i;
    }
  }
}

//solution 2, dumb inefficient brute force version
function gimme(triplet) {
  return (
    // check all posible positions compare values and return the index of the element that lies between.
    triplet[0] < triplet[1] && triplet[0] > triplet[2]
      ? 0
      : triplet[1] < triplet[2] && triplet[1] > triplet[0]
      ? 1
      : triplet[2] < triplet[0] && triplet[2] > triplet[1]
      ? 2
      : triplet[0] > triplet[1] && triplet[0] < triplet[2]
      ? 0
      : triplet[1] > triplet[2] && triplet[1] < triplet[0]
      ? 1
      : triplet[2] > triplet[0] && triplet[2] < triplet[1]
      ? 2
      : null
  );
}

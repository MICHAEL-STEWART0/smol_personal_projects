/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2] */

// solution

function powersOfTwo(n) {
  let powersOfTwoArr = [];
  for (let i = 0; i <= n; i++) {
    powersOfTwoArr.push(Math.pow(2, i));
  }

  return powersOfTwoArr;
}

powersOfTwo(0); // expecting [1]
powersOfTwo(1); // expecting [1, 2]
powersOfTwo(4); // expecting [1, 2, 4, 8, 16]

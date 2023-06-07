//prompt

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//solution

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  str.split("").forEach((el) => {
    el.toLowerCase() === "x"
      ? xCount++
      : el.toLowerCase() === "o"
      ? oCount++
      : null; //if el is === x increment xcount otherwise check if o is a match and increment oCount, if neither are a match return null since the string is invalid. this is where error handling is appropriate.
  });

  return xCount === oCount; // are these 2 values equal? truthy or falsy
}

// functions calls for functionaility
XO("xo"); //expect true
XO("xxo"); // expect false

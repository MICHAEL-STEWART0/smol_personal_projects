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
    el.toLowerCase() === "x" ? xCount++ : oCount++; //if el is === x increment x count otherwise oCount
  });

  return xCount === oCount; // are these 2 values equal? truthy or falsy
}

// functions calls for functionaility
XO("xo"); //expect true
XO("xxo"); // expect false

/*Task
Complete function padIt, which accepts 2 parameters:

str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
n: a number indicating how many times to pad the string. */

//solution
function padIt(str, n) {
  if (n === 0) {
    return str;
  }
  let paddedWord = [...str];
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) {
      paddedWord.unshift("*");
      i++;
    } else {
      paddedWord.push("*");
      i++;
    }
  }

  return paddedWord.join("");
}

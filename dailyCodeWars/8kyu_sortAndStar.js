/*https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

//solution

function twoSort(s) {
  const sortedArr = s.sort();
  const firstWord = sortedArr[0].split("");
  let str = "";
  for (let i = 0; i < firstWord.length; i++) {
    if (i !== firstWord.length - 1) {
      str +=
        firstWord[i] +
        String(firstWord[i]).replace(firstWord[i], "*".repeat(3));
    }
  }
  return (str += firstWord[firstWord.length - 1]);
}

///unit tests
twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]); // expected 'b***i***t***c***o***i***n'

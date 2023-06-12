/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

 */

//solution

var countSheep = function (num) {
  if (num === 0) {
    return "";
  }
  let arr = [];
  let sheep = " sheep...";
  for (let i = 1; i <= num; i++) {
    arr.push(`${i}${sheep}`);
  }
  return arr.join("");
};

countSheep(0); //expected ""
countSheep(1); //expected 1 sheep...
countSheep(2); //expected 2 sheep...

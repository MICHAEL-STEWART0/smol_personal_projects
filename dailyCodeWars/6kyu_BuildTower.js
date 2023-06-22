/* https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

//solution

function towerBuilder(nFloors) {
  const pyramid = [];
  const star = `*`;
  const space = ` `;

  for (let i = 0; i < nFloors; i++) {
    let numOfStars = 2 * i + 1;
    let numOfSpaces = nFloors - i - 1;

    pyramid.push(
      space.repeat(numOfSpaces) +
        star.repeat(numOfStars) +
        space.repeat(numOfSpaces)
    );
  }

  return pyramid;
}

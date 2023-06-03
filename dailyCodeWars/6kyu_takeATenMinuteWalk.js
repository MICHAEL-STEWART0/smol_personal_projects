/*You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
  // walk is an arr of n length of directions ['n', 's', 'w', 'e']

  // I need to track where in the grid I am since its a grid i could use x & y cordinates

  //start at x[0] y[0] (x = w -= 1, e += 1), (y = n += 1, s-=1).

  let startPosition = [0, 0]; //init starting pos
  let currentPosition = [0, 0]; //init current pos of [x,y] to track where we are.

  //check each direction that the app gives. compare each direction with each case and increment or decrament based off case match.
  walk.forEach((el) => {
    switch (el) {
      case "n":
        currentPosition[1] += 1;
        break;
      case "s":
        currentPosition[1] -= 1;
        break;
      case "e":
        currentPosition[0] += 1;
        break;
      case "w":
        currentPosition[0] -= 1;
        break;
    }
  });

  // if the  walk length is 10 minutes and current position is equal to starting position return true other wise return false
  return walk.length === 10 &&
    currentPosition[0] === startPosition[0] &&
    currentPosition[1] === startPosition[1]
    ? true
    : false;
}

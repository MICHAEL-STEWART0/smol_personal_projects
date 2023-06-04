/*The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]*/

// I have 2 solutions for this, the easy readable solution, and the refactored short version.

//Here is the readable solution ** with function call for test

function removeSmallest(numbers) {
  const numbersCopy = [...numbers]; //store shallow copy of numbers arr to not modify it.

  const smallestNumber = Math.min(...numbers); //find the falles number in the arr

  const indexOfSmall = numbersCopy.indexOf(smallestNumber); // find the index of that smalles number

  numbersCopy.splice(indexOfSmall, 1); // remove the smallest number from the array

  return numbersCopy; //return the array
}

removeSmallest([1, 2, 3, 4, 5]); //function call for testing

// refactored short one below ** with function call for test

function removeSmallest(numbers) {
  const numbersCopy = [...numbers]; //this function does exactly the same thing as above but does not store each value individually in memory

  numbersCopy.splice(numbersCopy.indexOf(Math.min(...numbers)), 1);
  return numbersCopy;
}

removeSmallest([1, 2, 3, 4, 5]); //function call for testing

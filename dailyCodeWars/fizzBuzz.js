function fizzBuzz(n) {
  //create a function called fizzBuzz that takes in a number && console.log all values from 1 to that number.

  for (let i = 1; i < n; i++) {
    // this loop will give me all numbers from 1 to that number.
    //check if i is divisible by 3 && 5 if it is console.log(`fizzBuzz`)
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`fizzBuzz`, i);
    }
    //check if i is divisible by 3, if it is console.log(`fizz`)
    else if (i % 3 === 0) {
      console.log(`fizz`, i);
    }
    //check if i is divisible by 5, if it is console.log(`buzz`)
    else if (i % 5 === 0) {
      console.log(`buzz`, i);
    } else {
      // if it is not divisible by 3 or 5 just log the number(i)
      console.log(i);
    }
  }
}

fizzBuzz(20);

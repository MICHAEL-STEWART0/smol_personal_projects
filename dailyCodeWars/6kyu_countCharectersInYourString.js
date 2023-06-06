//prompt

/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

 */

// thought process
// if given a string how would I iterate over each element, pass it into an object and add a value to it
// split the str into an array
// iterate using forEach to pass in the element and assign it as a property of an object
// if the object property is not unique add 1 to its value
// otherwise set it to 1

// solution

function count(string) {
  let uniqueCharacters = {};

  string.split("").forEach((el) => {
    // split the given str into an array of chars and loop over each element in the array passing it into the if statement.
    if (uniqueCharacters.hasOwnProperty(el)) {
      // if the object has this property add 1 to the value
      uniqueCharacters[el]++;
    } else {
      //otherwise the value to one
      uniqueCharacters[el] = 1;
    }
  });

  return uniqueCharacters;
}

// unit test
count(""); //expect {}
count("a"); //expect { a: 1 }
count("ab"); // expect { a: 1, b: 1 }
count("aba"); // expect { a: 2, b: 1 }
count("ABC"); // expect { A: 1, B: 1, C: 1 }

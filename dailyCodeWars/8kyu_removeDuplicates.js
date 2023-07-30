/*Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same. */

function distinct(a) {
  let set = [];
  for (let i = 0; i < a.length; i++) {
    if (!set.includes(a[i])) {
      set.push(a[i]);
    }
  }
  return set;
}

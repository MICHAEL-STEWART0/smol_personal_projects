/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"

["Peter"]                         -->  "Peter likes this"

["Jacob", "Alex"]                 -->  "Jacob and Alex like this"

["Max", "John", "Mark"]           -->  "Max, John and Mark like this"

["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.



*/

//solution to 6kyu

// check the length of the array, based on the length of the array target the user who likes the post. If the length of the likes arr is greater than 3 it should default to grabbing the first 2 people who like the post and return the number of others who liked it minus 2 so you don’t recount the 2 you already listed.

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;

    case 1:
      return `${names[0]} likes this`;

    case 2:
      return `${names[0]} and ${names[1]} like this`;

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

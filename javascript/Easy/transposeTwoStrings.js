// https://www.codewars.com/kata/581f4ac139dc423f04000b99/train/javascript

function transposeTwoStrings(array) {
  /* 
    Create the array using the array.from method and passed in the length
    it was gonna be using the two words in the array then I looped through the words 
    if the character isn't there I provide a space as a value 
    then I join all the characters using the join method

    */
  return Array.from(
    { length: Math.max(array[0].length, array[1].length) },
    (_, i) =>
      `${array[0][i] ? array[0][i] : " "} ${array[1][i] ? array[1][i] : " "}`
  ).join("\n");
}

console.log(transposeTwoStrings(["Hello", "World"]), "H W\ne o\nl r\nl l\no d");
console.log(
  transposeTwoStrings(["joey", "louise"]),
  "j l\no o\ne u\ny i\n  s\n  e"
);
console.log(transposeTwoStrings(["a", "cat"]), "a c\n  a\n  t");
console.log(transposeTwoStrings(["cat", ""]), "c  \na  \nt  ");
console.log(transposeTwoStrings(["!a!a!", "?b?b"]), "! ?\na b\n! ?\na b\n!  ");

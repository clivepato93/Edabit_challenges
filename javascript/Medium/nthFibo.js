// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {
  debugger;
  if (n <= 0) return n;
  // Return the n-th number in the Fibonacci Sequence
  if (n == 1) return 0;
  if (n == 2) return 1;
  return nthFibo(n - 1) + nthFibo(n - 2);
}

// console.log(nthFibo(1), 0, "1-st Fibo");
// console.log(nthFibo(2), 1, "2-nd Fibo");
// console.log(nthFibo(3), 1, "3-rd Fibo");
// console.log(nthFibo(4), 2, "4-th Fibo");

// console.log(nthFibo(6), 5, "4-th Fibo");

function numberOfPaths(n) {
  //   debugger;
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 4;
  return numberOfPaths(n - 1) + numberOfPaths(n - 2) + numberOfPaths(n - 3);
}
console.log(numberOfPaths(10));

// console.log(numberOfPaths(5));
// console.log(numberOfPaths(4));

function anagramsOf(string) {
  debugger;
  // Base case: if the string is only one character,
  // return an array containing just a single-character string:
  if (string.length === 1) {
    return [string[0]];
  }

  // Create an array to hold all the anagrams:
  let collection = [];
  debugger;
  // Find all anagrams of the substring from the second character until
  // the end. For example, if the string is "abcd", the substring is "bcd",
  // so we'll find all anagrams of "bcd":
  let substringAnagrams = anagramsOf(string.substring(1));

  // Iterate over each substring
  substringAnagrams.forEach((substringAnagram) => {
    debugger;
    // Iterate over each index of the substring, from 0 until
    // one index past the end of the string:
    for (let index = 0; index <= substringAnagram.length; index++) {
      // Create a copy of the substring anagram:
      debugger;
      let copy = substringAnagram.slice();

      // Insert the first character of our string into the
      // substring anagram copy. Where it will go depends
      // on the index we're up to within this loop.
      // Then, take this new string and add it to our collection of anagrams:
      copy = copy.slice(0, index) + string[0] + copy.slice(index);
      collection.push(copy);
    }
  });

  // Return the entire collection of anagrams:
  return collection;
}
console.log(anagramsOf("abc"));

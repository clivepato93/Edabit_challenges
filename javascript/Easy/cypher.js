// https://www.codewars.com/kata/57aa3927e298a757820000a8/train/javascript
function cypher(string) {
  // do your magic here
  const obj = {
    I: 1,
    l: 1,
    R: 2,
    z: 2,
    E: 3,
    e: 3,
    A: 4,
    a: 4,
    S: 5,
    s: 5,
    G: 6,
    b: 6,
    T: 7,
    t: 7,
    B: 8,
    g: 9,
    O: 0,
    o: 0,
  };
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter in obj) {
      newString += obj[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
}

console.log(cypher("Hello World"), "H3110 W0r1d", 'Testing "Hello World"');
console.log(
  cypher("I am your father"),
  "1 4m y0ur f47h3r",
  'Testing "I am your father"'
);
console.log(
  cypher("I do not know what else I can test. Be cool. Good luck"),
  "1 d0 n07 kn0w wh47 3153 1 c4n 7357. 83 c001. 600d 1uck",
  'Testing "I do not know what else I can test. Be cool. Good luck"'
);

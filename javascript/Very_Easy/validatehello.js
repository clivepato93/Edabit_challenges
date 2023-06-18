// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
// REGEX

function validateHello(greetings) {
  //i flag used at the case to match any of the words regardless of letter casing
  // example HOla hola would both match to true
  res = /hola|salut|ahoj|ciao|hello|hallo|czesc/i.test(greetings);
  return res;
}

console.log(validateHello("ahoj"), true);

console.log(validateHello("meh"), false);

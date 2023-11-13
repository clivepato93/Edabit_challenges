// https://www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript
// Booleans

function onlyOne(...args) {
  return (
    args.filter((bool) => bool == true).length == 1 &&
    args.filter((bool) => bool != true).length > 0
  );
}

console.log(onlyOne(true, false), true, "one true and one false");

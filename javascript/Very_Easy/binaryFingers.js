// https://www.codewars.com/kata/565f1bd8f97d3e59c400014a/train/javascript

function binaryFingers(binString) {
  const obj = {
    16: "Pinkie",
    8: "Ring",
    4: "Middle",
    2: "Index",
    1: "Thumb",
  };
  const arr = [16, 8, 4, 2, 1];
  const fingers = [];

  for (let i = Number.parseInt(binString, 2); i > 0; i) {
    console.log(i);
    const num = arr.find((num) => i >= num);
    console.log(num);
    fingers.push(obj[num]);
    i -= num;
  }

  return fingers;
}

// console.log(binaryFingers(""), []);
// console.log(binaryFingers("101"), ["Middle", "Thumb"]);
console.log(binaryFingers("11111"), [
  "Pinkie",
  "Ring",
  "Middle",
  "Index",
  "Thumb",
]);

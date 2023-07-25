// https://www.codewars.com/kata/57a23c2acf1fa514d0001034/train/javascript
function whoTookTheCarKey(message) {
  //Find that Freakin' Key!
  // Binary to Number then binary to letter
  return message
    .map((bin) => String.fromCharCode(Number.parseInt(bin, 2)))
    .join("");
}

console.log(
  whoTookTheCarKey([
    "01000001",
    "01101100",
    "01100101",
    "01111000",
    "01100001",
    "01101110",
    "01100100",
    "01100101",
    "01110010",
  ]),
  "Alexander"
);

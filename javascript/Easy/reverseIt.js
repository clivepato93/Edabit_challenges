// https://www.codewars.com/kata/557a2c136b19113912000010/train/javascript

function reverseIt(data) {
  if (typeof data !== "number" && typeof data !== "string") {
    return data;
  }
  const newData = [...new String(data)].reverse().join("");
  return typeof data === "number" ? +newData : newData;
}

console.log(reverseIt("Hello"), "olleH", "Not quite");
console.log(reverseIt(314159), 951413, "Not quite");
console.log(reverseIt("314159"), "951413", "Not quite");
console.log(reverseIt([]), [], "Not quite");

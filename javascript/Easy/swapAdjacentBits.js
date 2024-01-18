// https://www.codewars.com/kata/58845a92bd573378f4000035/train/javascript

function swapAdjacentBits(n) {
  const obj = { 10: "01", "01": 10 };
  let x = n.toString(2);
  let newString = "";
  if (x.length % 2) x = "0" + x;
  console.log(x);
  for (let i = 0; i < x.length; i += 2) {
    const string = x.slice(i, i + 2);
    const element = obj[string] || "";
    newString += element || string;
  }
  return parseInt(newString, 2);
}

console.log(swapAdjacentBits(13), 14, "For n = 13");

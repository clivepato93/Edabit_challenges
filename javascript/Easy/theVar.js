// codewars.com/kata/5716955a794d3013d00013f9/train/javascript
function theVar(theVariables) {
  // your code here
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return eval(
    `${arr.indexOf(theVariables[0]) + 1}+${arr.indexOf(theVariables[2]) + 1}`
  );
}

// https://www.codewars.com/kata/5713bc89c82eff33c60009f7/train/javascript
function toFreud(string) {
  return string
    ? string
        .split(" ")
        .map((word) => "sex")
        .join(" ")
    : string;
}

console.log(toFreud(""), "");
console.log(toFreud("test"), "sex");
console.log(toFreud("This is a test"), "sex sex sex sex");
console.log(toFreud("This is a longer test"), "sex sex sex sex sex");
console.log(
  toFreud("You're becoming a true freudian expert"),
  "sex sex sex sex sex sex"
);

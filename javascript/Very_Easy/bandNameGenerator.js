// https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript
function bandNameGenerator(str) {
  // Happy coding
  const [start, middle, end] = [str[0], str.slice(1, -1), str.slice(-1)];
  if (start === end) return start.toUpperCase() + middle + end + middle + end;
  return "The " + start.toUpperCase() + middle + end;
}

console.log(bandNameGenerator("knife"), "The Knife");
console.log(bandNameGenerator("tart"), "Tartart");
console.log(bandNameGenerator("sandles"), "Sandlesandles");
console.log(bandNameGenerator("bed"), "The Bed");

// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
// Regex
function remove(string) {
  //coding and coding....

  return string.split("!").join("") + "!";
}

function remove(s) {
  return s.replace(/!/g, "") + "!";
}
// console.log(remove("Hi!", "Hi!"));
// console.log(remove("Hi!!!", "Hi!"));
// console.log(remove("!Hi", "Hi!"));
// console.log(remove("!Hi!", "Hi!"));
// console.log(remove("Hi! Hi!", "Hi Hi!"));
// console.log(remove("Hi", "Hi!"));

// www.codewars.com/kata/57faece99610ced690000165/train/javascript

function remove(string) {
  if (string[string.length - 1] !== "!") {
    return string;
  }

  return remove((string = string.slice(0, string.length - 1)));
}

function remove(s) {
  return s.replace(/!+$/, "");
}

// console.log(remove("Hi!"), "Hi");
// console.log(remove("Hi!!!"), "Hi");
// console.log(remove("!Hi"), "!Hi");
// console.log(remove("!Hi!"), "!Hi");
// console.log(remove("Hi! Hi!"), "Hi! Hi");
// console.log(remove("Hi"), "Hi");

//https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript
function remove(string) {
  return string.replace(/!/, "");
}

// console.log(remove("Hi!"), "Hi!");
// console.log(remove("Hi!!!"), "Hi!!!");
// console.log(remove("!Hi"), "Hi");
// console.log(remove("!Hi!"), "Hi!");
// console.log(remove("Hi! Hi!"), "Hi Hi!");
// console.log(remove("Hi"), "Hi");

//https://www.codewars.com/kata/57faf7275c991027af000679/solutions/javascript
function remove(s, n) {
  //coding and coding....

  for (let i = 0; i < n; i++) {
    s = s.replace(/!/, "");
  }

  return s;
}

// console.log(remove("Hi!", 1), "Hi");
// console.log(remove("Hi!", 100), "Hi");
// console.log(remove("Hi!!!", 1), "Hi!!");
// console.log(remove("Hi!!!", 100), "Hi");
// console.log(remove("!Hi", 1), "Hi");
// console.log(remove("!Hi!", 1), "Hi!");
// console.log(remove("!Hi!", 100), "Hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi");
// console.log(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi");

// https://www.codewars.com/kata/57fe864854685b1c420002e0/train/javascript

function sortArray(a1, a2) {
  const finalArr = [];
  for (let i = 0; i < a1.length; i++) {
    finalArr.push(a2[a2.findIndex((el) => a1[i][0] === el[0])]);
  }
  return finalArr;
}

var a1 = ["giraffe", "orangutan", "impala", "elephant", "rhino"];
var a2 = ["rattlesnake", "eagle", "geko", "iguana", "octopus"];
console.log(sortArray(a1, a2), [
  "geko",
  "octopus",
  "iguana",
  "eagle",
  "rattlesnake",
]);

var a1 = ["jellyfish", "koi", "caribou", "owl", "dolphin"];
var a2 = ["ostrich", "jaguar", "deer", "camel", "kangaroo"];
console.log(sortArray(a1, a2), [
  "jaguar",
  "kangaroo",
  "camel",
  "ostrich",
  "deer",
]);

var a1 = ["newt", "lizard", "snail", "tapir", "rabbit"];
var a2 = ["tortoise", "narwhal", "llama", "raven", "sloth"];
console.log(sortArray(a1, a2), [
  "narwhal",
  "llama",
  "sloth",
  "tortoise",
  "raven",
]);

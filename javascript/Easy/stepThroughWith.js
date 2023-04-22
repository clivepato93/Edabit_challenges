// www.codewars.com/kata/5642bf07a586135a6f000004/train/javascript

function stepThroughWith(s) {
  const letter = [...s].filter((letter, i, arr) => letter === arr[i + 1]);
  //You can't bring your code, but you can bring this comment
  return Boolean(letter.length);
}

console.log(
  stepThroughWith("moon"),
  true,
  "You can take the moon, but not the sun"
);
console.log(
  stepThroughWith("test"),
  false,
  "You can take a challenge, but not a test"
);
console.log(
  stepThroughWith("glasses"),
  true,
  "You can take your glasses, but not your contacts"
);
console.log(
  stepThroughWith("airplane"),
  false,
  "You can take a balloon, but not an airplane"
);
console.log(
  stepThroughWith("free"),
  true,
  "You can be free, but not in chains"
);
console.log(
  stepThroughWith("branch"),
  false,
  "You can take the tree or the wood, but not a branch"
);

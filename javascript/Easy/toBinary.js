// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/train/javascript

// const toBinary = (n) => +n.toString(2);

// console.log(toBinary(1), 1);
// console.log(toBinary(2), 10);
// console.log(toBinary(3), 11);
// console.log(toBinary(5), 101);

// https://www.codewars.com/kata/55606aeebf1f0305f900006f/train/javascript/64ce92214e8a904a6ae329ee

function toBinary(n) {
  //Be Ready for Large Numbers. Happy Coding ^_^
  if (n >= 0) {
    return n.toString(2);
  }
  const str = [...n.toString(2).padStart(32, 0)]
    .map((num) => (num == 1 ? 0 : 1))
    .join("");
  //   if (str[str.length-1]==)
  return (Number.parseInt(str, 2) + 1).toString(2);
}

// console.log(-3 >>> 0, (-3 >>> 0).toString(2), 3, (3).toString(2), -1 >>> 0);

console.log(
  (-12).toString(2),
  // (10).toString(2).padStart(32, 0),
  // "\n",
  (-12 >>> 0).toString(2)
);

// console.log((-2 >>> 0).toString(2).padStart(32, 0));

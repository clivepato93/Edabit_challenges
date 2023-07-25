//www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

function catMouse(x) {
  //   console.log(x.lastIndexOf("."), x.indexOf("."));
  return x.lastIndexOf(".") <= 3 ? "Caught!" : "Escaped!";
}

console.log(catMouse("C....m"), "Escaped!");
console.log(catMouse("C..m"), "Caught!");
console.log(catMouse("C.....m"), "Escaped!");

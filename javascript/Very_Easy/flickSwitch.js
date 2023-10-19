// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript

//Arrays Boolean
function flickSwitch(arr) {
  let val = true;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "flick") {
      newArr.push(val);
    } else {
      val = !val;
      newArr.push(val);
    }
  }
  return newArr;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]), [
  true,
  false,
  false,
  false,
]);
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]), [
  false,
  false,
  false,
  false,
]);
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [
  true,
  true,
  false,
  false,
  true,
]);
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [
  false,
  true,
  false,
  true,
  false,
]);
console.log(flickSwitch(["bicycle"]), [true]);
console.log(flickSwitch(["flick"]), [false]);
console.log(flickSwitch([]), []);

// https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript
//generators
function* generator(i = 1) {
  debugger;
  let index = i;
  while (true) {
    const newValue = yield index++;
    if (newValue !== undefined) {
      index = newValue;
    }
  }
}

var gen = generator();
console.log(gen.next().value, 1, "Gen => 1");
console.log(gen.next().value, 2, "Gen => 2");
console.log(gen.next().value, 3, "Gen => 3");
console.log(gen.next().value, 4, "Gen => 4");
console.log(gen.next().value, 5, "Gen => 5");
console.log(gen.next(10).value, 10, "Gen => 10");

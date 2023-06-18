//https://www.codewars.com/kata/521cd52e790405a74800032c/train/javascript
// Debugging object
// function wrap(value) {
//   return;
//   {
//     value: value;
//   }
// }

function wrap(value) {
  return { value };
}

const res = wrap("MyTest");
console.log(typeof res, "object");
console.log(res.value, "MyTest");
console.log(wrap(343).value, 343);
var obj = { test: "testy" };
console.log(wrap(obj).value, obj);

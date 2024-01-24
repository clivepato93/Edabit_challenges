// https://codewars.com/kata/5809b62808ad92e31b000031/train/javascript

function calculate(str) {
  //your code here...
  //   const inst  = str.split(/\d/).filter(str=>str)
  const obj = { plus: "+", minus: "-" };
  return `${eval(
    str.replace(/plus/g, (res) => obj[res]).replace(/minus/g, (res) => obj[res])
  )}`;
}

console.log(calculate("1plus2plus3plus4"), "10");
console.log(calculate("1minus2minus3minus4"), "-8");
console.log(calculate("1plus2plus3minus4"), "2");

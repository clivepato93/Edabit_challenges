//www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

function minMinMax(array) {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let minrange;

  for (let i = min + 1; i < max; i++) {
    console.log(i);
    if (array.includes(i) == false) {
      minrange = i;
      break;
    }
  }
  return [min, minrange, max];
}

console.log(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24], "Test Failed");
// console.log(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8], "Test Failed");
// console.log(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9], "Test Failed");

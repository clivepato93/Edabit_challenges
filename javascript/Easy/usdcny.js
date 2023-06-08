// codewars.com/kata/5977618080ef220766000022/train/javascript

// toFixed works with decimal values tenth, hundreths etc...
function usdcny(usd) {
  const conversion = (usd * 6.75).toFixed(2);
  return `${conversion} Chinese Yuan`;
}

console.log(usdcny(15), "101.25 Chinese Yuan");
console.log(usdcny(465), "3138.75 Chinese Yuan");

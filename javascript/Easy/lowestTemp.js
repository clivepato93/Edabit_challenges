// https://www.codewars.com/kata/588e0f11b7b4a5b373000041/train/javascript

function lowestTemp(t) {
  const temps = t.split(" ");
  let temp;
  for (let i = 0; i < temps.length; i++) {
    const curr = +temps[i];
    if (!temp) temp = curr;
    if (curr < temp) temp = curr;
  }

  return temp || null; //lowest temperature
}

console.log(lowestTemp(""), null);
console.log(lowestTemp("-1 50 -4 20 22 -7 0 10 -8"), -8);
console.log(lowestTemp("18 27 -42 16 17 -43 36 45 -25 -24 19 -14"), -43);

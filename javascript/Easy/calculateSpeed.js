// https://www.codewars.com/kata/57b365f81fae8a0571000142/train/javascript

function calculateSpeed(distance, time) {
  // ...
  console.log(60 / 5);
  const d = +distance.split(/[a-z]/)[0];
  return d;
}

// console.log(calculateSpeed("100m", "10s"), "22mph");
console.log(calculateSpeed("3km", "5min"), "22mph");
// console.log(calculateSpeed("35m", "293s"), "0mph");
// console.log(calculateSpeed("573km", "39min"), "548mph");

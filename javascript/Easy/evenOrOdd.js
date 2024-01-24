// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

function evenOrOdd(str) {
  let [even, odd] = [0, 0];
  for (let i = 0; i < str.length; i++) {
    const num = str[i];
    if (/[02468]/.test(str[i])) {
      even += +num;
    } else {
      odd += +num;
    }
  }
  return even > odd
    ? "Even is greater than Odd"
    : odd > even
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}

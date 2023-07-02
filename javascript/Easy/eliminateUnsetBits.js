function eliminateUnsetBits(number) {
  // your code here
  let num = 0;
  const bits = number.replace(/0/g, "");
  for (let i = 0; i <= bits.length; i++) {
    if (i == 0) num++;
    else num *= 2;
  }

  return num - 1;
}

console.log(eliminateUnsetBits("11010101010101"), 255);
console.log(eliminateUnsetBits("111"), 7);
console.log(eliminateUnsetBits("1000000"), 1);
console.log(eliminateUnsetBits("000"), 0);

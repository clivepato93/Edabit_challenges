function getFreeUrinals(urinals) {
  if (/11/.test(urinals)) return -1;
  const u = [...urinals];
  let total =0
  for (let i = 0; i < u.length; i++) {
    let curr = u[i]
    if(i==0 && u[i]!=='1' && u[i+1]!=='1'){
        u[i] = "1"
        ++total
    }
    if(u[i]=='0' && u[])
  }
}

console.log(getFreeUrinals("10001"), 1);
console.log(getFreeUrinals("1001"), 0);
console.log(getFreeUrinals("00000"), 3);
console.log(getFreeUrinals("0000"), 2);
console.log(getFreeUrinals("01000"), 1);
console.log(getFreeUrinals("00010"), 1);
console.log(getFreeUrinals("10000"), 2);
console.log(getFreeUrinals("1"), 0);
console.log(getFreeUrinals("0"), 1);
console.log(getFreeUrinals("10"), 0);

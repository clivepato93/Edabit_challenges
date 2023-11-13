// https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
// strings
function sillycase(silly) {
  //your code
  const splitter = Math.round(silly.length / 2);
  return silly
    .slice(0, splitter)
    .replace(/./g, (letter) => letter.toLowerCase())
    .concat(silly.slice(splitter).toUpperCase());
}
console.log(sillycase("foobar"), "fooBAR");
console.log(sillycase("codewars"), "codeWARS");
console.log(sillycase("brian"), "briAN");

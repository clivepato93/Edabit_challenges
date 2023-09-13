// codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript
// regex
// replace method
function nerdify(txt) {
  const obj = { a: 4, e: 3, A: 4, E: 3, l: 1 };
  return txt.replace(/[aAeEl]/g, (v) => obj[v.toLowerCase()]);
}

console.log(nerdify("Fund4m3nt41s"), "Fund4m3nt41s");
console.log(nerdify("Seven"), "S3v3n");
console.log(nerdify("Los Angeles"), "Los 4ng313s");
console.log(nerdify("Seoijselawuue"), "S3oijs314wuu3");

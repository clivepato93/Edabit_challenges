//www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
// String //methods
function splitAndMerge(string, separator) {
  const words = string.split(" ").map((word) => {
    const letters = [...word].join(separator);
    return letters;
  });
  return [...words].join(" ");
}

console.log(splitAndMerge("My name is John", " "), "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John", "-"), "M-y n-a-m-e i-s J-o-h-n");

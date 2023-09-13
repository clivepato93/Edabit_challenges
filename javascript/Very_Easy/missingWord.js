//https://www.codewars.com/kata/58b972cae826b960a300003e/train/javascript

function missingWord(nums, str) {
  str = str.replace(/\s/g, "");
  const word = nums
    .sort((a, b) => a - b)
    .map((num) => (str[num] ? str[num].toLowerCase() : undefined));

  if (word.includes(undefined)) return "No mission today";

  return word.join("");
}

console.log(missingWord([5, 0, 3], "I love you"), "ivy");
console.log(
  missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"),
  "bay"
);
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today");

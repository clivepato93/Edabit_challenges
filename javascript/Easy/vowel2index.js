//www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

function vowel2index(str) {
  //code me
  return [...str]
    .map((letter, i) => (/[aeiou]/i.test(letter) ? i + 1 : letter))
    .join("");
}

console.log(vowel2index("this is my string"), "th3s 6s my str15ng");
console.log(
  vowel2index("Codewars is the best site in the world"),
  "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld"
);
console.log(
  vowel2index("Tomorrow is going to be raining"),
  "T2m4rr7w 10s g1415ng t20 b23 r2627n29ng"
);
console.log(vowel2index(""), "");

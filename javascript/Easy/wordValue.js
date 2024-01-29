// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

function wordValue(a) {
  for (let i = 0; i < a.length; i++) {
    const word = a[i];
    let total = 0;
    for (let j = 0; j < word.length; j++) {
      //       console.log(word.charCodeAt(j))
      total += /[a-z]/.test(word[j]) ? word.charCodeAt(j) - 96 : 0;
    }
    console.log(total);
    a[i] = total * (i + 1);
  }
  return a;
}

console.log(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]), [12, 24, 18, 24]);

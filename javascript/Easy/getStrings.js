// https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

function getStrings(city) {
  const obj = {};
  const arr = [];
  for (let i = 0; i < city.length; i++) {
    const letter = city[i].toLowerCase();
    if (letter == " ") {
      continue;
    }
    if (letter in obj == false) {
      obj[letter] = 1;
      arr.push(letter);
    } else {
      obj[letter]++;
    }
  }
  return arr
    .reduce((t, c) => (t += c + ":" + "*".repeat(obj[c])) + ",", "")
    .slice(0, -1);
}

console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");

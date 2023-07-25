// https://www.codewars.com/kata/58870402c81516bbdb000088/train/javascript

function stringsConstruction(A, B, count = 0, string = "", index = 0) {
  //coding and coding..
  B = [...B].sort();
  console.log(B.filter((letter) => A.indexOf(letter) !== -1));
  const obj = [...A].reduce((a, v) => ({ ...a, [v]: 0 }), {});
  for (let i = 0; i < B.length; i++) {
    if (obj[B[i]] != undefined) {
      obj[B[i]] += 1;
    }
  }
  const min = Math.min(...Object.values(obj));
  // for (const key in obj) {
  //   if(obj[key]===min) return key
  //   }
  // }
  return min;
}

// console.log(stringsConstruction("abc", "abccba"), 2);

console.log(
  stringsConstruction(
    "hnccv",
    "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"
  ),
  3
);

console.log(stringsConstruction("abc", "def"), 0);

// console.log(stringsConstruction("zzz", "zzzzzzzzzzz"), 3);

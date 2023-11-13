// https://www.codewars.com/kata/5669a5113c8ebf16ed00004c/train/javascript

function SubstringTest(str1, str2) {
  //Code goes here!
  let [str3, str4] = [str1, str2];
  str3 = str3.toLowerCase();
  str4 = str4.toLowerCase();

  console.log(str3, str4);

  if (str3.length >= str4.length) {
    for (let i = 0; i < str3.length - 1; i++) {
      const slice = str4.slice(i, i + 2);
      if (str3.indexOf(slice) > -1 && slice.length >= 2) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < str4.length - 1; i++) {
      const slice = str3.slice(i, i + 2);
      if (str4.indexOf(slice) > -1 && slice.length >= 2) {
        return true;
      }
    }
  }

  return false;
}

function SubstringTest(str1, str2) {
  //Code goes here!
  let [min, max] = [];
  min = str2.length >= str1.length ? str1.slice() : str2.slice();
  max = min === str1 ? str2 : str1;
  [min, max] = [min.toLowerCase(), max.toLowerCase()];
  console.log(min, max);
  for (let i = 0; i < max.length - 1; i++) {
    const slice = min.slice(i, i + 2);
    if (max.indexOf(slice) > -1 && slice.length >= 2) {
      return true;
    }
  }
  //   if (str3.length >= str4.length) {
  //     for (let i = 0; i < str3.length - 1; i++) {
  //       const slice = str4.slice(i, i + 2);
  //       if (str3.indexOf(slice) > -1 && slice.length >= 2) {
  //         return true;
  //       }
  //     }
  //   } else {
  //     for (let i = 0; i < str4.length - 1; i++) {
  //       const slice = str3.slice(i, i + 2);
  //       if (str4.indexOf(slice) > -1 && slice.length >= 2) {
  //         return true;
  //       }
  //     }
  //   }

  return false;
}

console.log(SubstringTest("Something", "Home"), true);
console.log(SubstringTest("Something", "Fun"), false);

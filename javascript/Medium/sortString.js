function sortString(string, ordering) {
  console.log(ordering);

  ordering = [...new Set(ordering)].join("");
  console.log(ordering);
  const arr = string.split("");
  return arr
    .sort((first, second) => {
      debugger;
      //   console.log(arr);
      if (ordering.indexOf(first) > -1 && ordering.indexOf(second) == -1) {
        return -1;
      }

      if (ordering.indexOf(first) == -1 && ordering.indexOf(second) > -1) {
        return 1;
      }
      if (ordering.indexOf(first) > -1 && ordering.indexOf(second) > -1) {
        return ordering.indexOf(first) - ordering.indexOf(second);
      }

      //   console.log(arr);
      return 1;
    })
    .join("");
}

function sortString(str, order) {
  let res = [];
  for (let i in order) {
    debugger;
    while (str.includes(order[i])) {
      res.push(order[i]);
      str = str.replace(order[i], "");
    }
  }

  return res.join("") + str;
}

// function test(arr) {
//   return arr.sort((a, b) => {
//     debugger;
//     console.log(this);
//     return a - b;
//   });
// }
// console.log(test([1, 4, 1, 5, 9, 11]));
console.log(sortString("banana", "an"), "aaannb");
console.log(sortString("foos", "of"), "oofs");

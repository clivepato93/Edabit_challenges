// https://www.codewars.com/kata/5963314a51c68a26600000ae/train/javascript

function longer(s) {
  // happy coding!
  const sorter = (a, b) => {
    debugger;
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    if (a.length == b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] === a[i].toLowerCase() && b[i] === b[i].toUpperCase())
          return 1;

        if (a[i] === a[i].toUpperCase() && b[i] === b[i].toLowerCase())
          return -1;

        if (a[i].charCodeAt(0) < b[i].charCodeAt(0)) return -1;

        if (a[i].charCodeAt(0) > b[i].charCodeAt(0)) return 1;
      }
    }
    return 0;
  };
  return s.split(/\s/).sort(sorter).join(" ");
}

function longer(s) {
  return s
    .split(" ")
    .sort()
    .sort((a, b) => {
      debugger;
      // console.log(s);
      if (a.length - b.length != 0) return a.length - b.length;
      if (a > b) return a > b;
      return 0;
    })
    .join(" ");
}

// console.log(longer("edge Town"), "Town edge");

// console.log(longer("on of"), "of on");

console.log(
  longer("Darkness on the edge of Town"),
  "of on the Town edge Darkness"
);

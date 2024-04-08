// https://codewars.com/kata/59f69fefa0143109e5000019/train/javascript

function didWeWin(plays) {
  // Well, did we win or not!!!
  let yards = 0;
  for (let i = 0; i < plays.length; i++) {
    // console.log(plays[i]);
    if (plays[i].length == 0) break;
    if (plays[i][1] == "turnover") return false;
    if (plays[i][1] == "sack") {
      yards -= plays[i][0];
    } else {
      yards += plays[i][0];
    }
  }
  return yards > 10;
}

console.log(
  didWeWin([
    [8, "pass"],
    [5, "sack"],
    [3, "sack"],
    [5, "run"],
  ]),
  false
);
console.log(didWeWin([[12, "pass"], [], [], []]), true);
console.log(
  didWeWin([
    [2, "run"],
    [5, "pass"],
    [3, "sack"],
    [8, "pass"],
  ]),
  true
);
console.log(didWeWin([[5, "pass"], [6, "turnover"], [], []]), false);

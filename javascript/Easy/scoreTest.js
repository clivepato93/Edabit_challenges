// https://www.codewars.com/kata/55d2aee99f30dbbf8b000001/train/javascript

function scoreTest(str, right, omit, wrong){
    //insert code here
    const r = str.filter(el => el==0).length*right
    const o = str.filter(el => el==1).length*omit
    const w = str.filter(el => el==2).length*wrong
    return  o<0? (r-w)+(o):r+o-w//[r,o,w]
  }


console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3);

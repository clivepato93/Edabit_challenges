// https://www.codewars.com/kata/58a08e622e7fb654a300000e/train/javascript

function sortGrades(lst) {
  //your code here
  const obj = {
    VB: 1,
    V0: 2,
    "V0+": 3,
    V1: 4,
    V2: 5,
    V3: 6,
    V4: 7,
    V5: 8,
    V6: 9,
    V7: 10,
    V8: 11,
    V9: 12,
    V10: 13,
    V11: 14,
    V12: 15,
    V13: 16,
    V14: 17,
    V15: 18,
    V16: 19,
    V17: 20,
  };
  return lst.sort((a, b) => obj[a] - obj[b]);
}

const sortGrades = (grades) => {
  const value = (x) => ({ VB: -1, "V0+": 0.5 }[x] || Number(x.slice(1)));

  return grades.sort((a, b) => value(a) - value(b));
};

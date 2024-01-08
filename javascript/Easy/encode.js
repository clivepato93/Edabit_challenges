// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

function encode(str, n) {
  const aP = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  const arr = [...str].map((letter) => aP[letter]);
  const nums = `${n}`;
  let i = 0;
  for (let x = 0; x < arr.length; x++) {
    if (i == nums.length) {
      i = 0;
    }
    arr[x] += +nums[i];
    i += 1;
  }
  return arr;
}

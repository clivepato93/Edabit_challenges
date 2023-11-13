// https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript

function compose(s1, s2) {
  // your code
  const s1Arr = s1.split("\n");
  const s2Arr = s2.split("\n");

  const s3 = [];
  for (let i = 0; i < s1Arr.length; i++) {
    const len = s2Arr.length;
    s3.push(
      s1Arr[i].slice(0, i + 1) +
        s2Arr[len - (i + 1)].slice(0, s2Arr[len - (i + 1)].length - i)
    );
  }

  return s3.join("\n");
}

console.log(
  compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"),
  "bNkTB\nhTrWO\nRTFVi\nCnnIj"
);
// console.log(
//   compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW"),
//   "HgYPW\nTGGbM\nIPhqt\nuUMDH"
// );
// console.log(
//   compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf"),
//   "tzlYf\nOOmYF\nsqPEZ\nxMkBh"
// );

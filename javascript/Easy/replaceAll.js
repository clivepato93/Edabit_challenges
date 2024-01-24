// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/train/javascript

function replaceAll(seq, find, r) {
  if (typeof seq == "object") {
    return seq.map((num) => (num == find ? r : num));
  }
  let str = "";
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] !== find) {
      str += seq[i];
    } else {
      str += r;
    }
  }
  return str;
}
console.log(replaceAll([], 1, 2), []);
console.log(replaceAll([1, 2, 2], 1, 2), [2, 2, 2]);
// console.log(
//   replaceAll(
//     `)|5gpY/O!'o]<--MR.-LAwT0u,%i>y"d fxAz$KdFCQr_CB4(4-|-y~&9giv3!#7GMt.CJI[bL},S`,
//     "[",
//     "n"
//   )
// );
console.log(
  replaceAll(
    `IZ:HU:"gz%%y,VbP^cq(,ad77cIz)RX}iaF5vqQ|O@lTDtq'M}Myk5AINx@+5{cY`,
    "|",
    ";"
  )
);

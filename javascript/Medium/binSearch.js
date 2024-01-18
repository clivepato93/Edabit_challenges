// https://www.codewars.com/kata/547bf139ec2cf10b7c0003e6/train/javascript

function binSearch(arr, toSearch) {
  let [start, end] = [0, arr.length - 1];
  while (start <= end) {
    const pos = Math.floor((start + end) / 2);
    if (arr[pos] == toSearch) return pos;
    if (toSearch > arr[pos]) {
      start = pos + 1;
    } else {
      end = pos - 1;
    }
  }
  return -1;
}

var arr = [1, 2, 3, 4, 5];

console.log(binSearch(arr, 6), -1);
// console.log(binSearch(arr, 2), 1);

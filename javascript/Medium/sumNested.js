// https://www.codewars.com/kata/5a15a4db06d5b6d33c000018/train/javascript

const sumNested = (arr, sum = []) => {
  //
  //   debugger;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    if (Array.isArray(element)) {
      sumNested(element, sum);
    }
    if (typeof element == "number") {
      //   continue;
      sum.push(element);
    }
  }
  return sum.reduce((t, c) => t + c, 0);
};

console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);

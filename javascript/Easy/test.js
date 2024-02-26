// function countup(n) {
//   debugger;
//   if (n < 1) return [];
//   else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }

// console.log(countup(5));

function multiply(arr, n) {
  debugger;
  if (n <= 0) {
    return 1;
  }
  return multiply(arr, n - 1) * arr[n - 1];
}

// console.log(multiply([1, 2, 3, 4, 5], 5));

// const getPermutations = (arr) => {
//   // debugger;
//   debugger;

//   const output = [];

//   const swapInPlace = (arrToSwap, indexA, indexB) => {
//     debugger;
//     const temp = arrToSwap[indexA];
//     arrToSwap[indexA] = arrToSwap[indexB];
//     arrToSwap[indexB] = temp;
//   };

//   const generate = (n, heapArr) => {
//     debugger;
//     if (n === 1) {
//       output.push(heapArr.slice());
//       return;
//     }
//     debugger;
//     generate(n - 1, heapArr);
//     debugger;

//     for (let i = 0; i < n - 1; i++) {
//       debugger;

//       if (n % 2 === 0) {
//         swapInPlace(heapArr, i, n - 1);
//       } else {
//         swapInPlace(heapArr, 0, n - 1);
//       }

//       generate(n - 1, heapArr);
//     }
//   };

//   generate(arr.length, arr.slice());

//   return output;
// };

const getPermutations = (arr) => {
  // debugger;
  debugger;

  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    debugger;
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    debugger;
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }
    debugger;
    generate(n - 1, heapArr);
    debugger;

    for (let i = 0; i < n - 1; i++) {
      debugger;

      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
};

console.log(getPermutations([1, 2, 3]));

function latestClock(a, b, c, d) {
  //   const nums = [a, b, c, d];
  const arr = [a, b, c, d];
  const final = [];
  const swapInPlace = (arrToSwap, indexA, indexB) => {
    debugger;
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    debugger;
    if (n === 1) {
      const hours = +`${heapArr[0]}${heapArr[1]}`;
      if (hours > 24) {
        return;
      }

      const mins = +`${heapArr[2]}${heapArr[3]}`;
      if (mins < 60) {
        console.log([hours, mins]);
        final.push([hours, mins]);

        return;
      }
    }
    debugger;
    generate(n - 1, heapArr);
    debugger;

    for (let i = 0; i < n - 1; i++) {
      debugger;

      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());
  const hi = final.sort()[final.length - 1];
  return;
}

// console.log(latestClock(1, 9, 8, 3, "19:38"));
// console.log(latestClock(9, 1, 2, 5, "21:59"));
// console.log(latestClock(1, 2, 8, 9, "19:28"));
// console.log(latestClock(0, 0, 0, 0, "00:00"));
// console.log(latestClock(2, 4, 0, 0, "20:40"));

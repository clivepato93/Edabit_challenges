// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

function latestClock(a, b, c, d) {
  //   const nums = [a, b, c, d];
  const arr = [a, b, c, d];
  const final = [];
  const swapInPlace = (arrToSwap, indexA, indexB) => {
    // debugger;
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    // debugger;
    if (n === 1) {
      const hours = +`${heapArr[0]}${heapArr[1]}`;
      if (hours > 23) {
        return;
      }

      const mins = +`${heapArr[2]}${heapArr[3]}`;
      if (mins < 60) {
        final[0] =
          final[0] == undefined
            ? [hours, mins]
            : final[0][0] < hours && final[0][1] < mins
            ? [hours, mins]
            : final[0];

        return;
      }
      return;
    }
    // debugger;
    generate(n - 1, heapArr);
    // debugger;

    for (let i = 0; i < n - 1; i++) {
      //   debugger;

      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());
  // return String(final[0][0]).padStart(2, 0);
  return (
    String(final[0][0]).padStart(2, 0) +
    ":" +
    String(final[0][1]).padStart(2, 0)
  );
  //   return final;
  //   return final[0][0].padStart(2, 0)

  //   const paddedhours = `${hours}`.padStart(2, 0);
  //   const paddedmins = `${mins}`.padStart(2, 0);
}

console.log(latestClock(1, 9, 8, 3, "19:38"));
// console.log(latestClock(9, 1, 2, 5, "21:59"));
// console.log(latestClock(1, 2, 8, 9, "19:28"));
// console.log(latestClock(0, 0, 0, 0, "00:00"));
// console.log(latestClock(2, 4, 0, 0, "20:40"));

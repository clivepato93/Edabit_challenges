// https://www.codewars.com/kata/58fd52b59a9f65c398000096/train/javascript

function minAndMax(l, d, x) {
  //coding and coding..
  const getTotal = (num) => [...`${num}`].reduce((t, c) => (t += +c), 0);
  const arr = [0, 0];
  //   console.log(getTotal(505));
  while (l <= d) {
    if (arr[0] == 0 && getTotal(l) === x) {
      console.log(l);
      arr[0] = l;
    }

    if (getTotal(d) === x) {
      console.log(l);
      arr[1] = l;
    }
    // console.log(l);
    ++l;
  }
  return arr;
}

console.log(minAndMax(500, 505, 10), [505, 505]);

// console.log(minAndMax(100, 200, 10), [109, 190]);

// console.log(minAndMax(123, 456, 5), [131, 410]);

// console.log(minAndMax(99, 501, 5), [104, 500]);

// console.log(minAndMax(99, 234, 1), [100, 100]);

// console.log(minAndMax(99, 234, 19), [199, 199]);

// console.log(minAndMax(99, 5001, 27), [999, 4995]);

// console.log(minAndMax(99, 5001, 28), [1999, 4996]);

// console.log(minAndMax(2000, 7000, 3), [2001, 3000]);

// https://www.codewars.com/kata/58dace86b809ca6c62000ccf/train/javascript

// O(n^2)
function hasPair(A, sum) {
  // Beware of large arrays
  //   const obj =
  let newArr = [...new Set(A)];
  for (let i = 0; i < newArr.length; i++) {
    const num = newArr[i];
    const check = newArr.indexOf(sum - num);
    if (check > -1 && check !== i) {
      return true;
    }
  }
  return false;
}

function hasPair(A, sum) {
  // Beware of large arrays
  //   const obj =
  let first = 0;
  let last = A.length - 1;

  while (A[first] + A[last] != sum) {
    debugger;
    console.log(A[first], A[last]);
    if (A[first] + A[last] == sum) {
      return true;
    }
    if (A[first] + A[last] > sum) {
      last--;
    }

    if (A[first] + A[last] < sum) {
      first++;
    }
    if (first == A.length - 1 || last == 0) {
      return false;
    }
  }

  return true;
}

// solution I was impressed by hash tables
function hasPair(A, sum) {
  var dict = {};
  for (var a = 0; a < A.length; a++) {
    // debugger;
    if (dict[sum - A[a]]) return true;
    dict[A[a]] = true;
  }
  return false;
}

console.log(hasPair([1, 3, 7], 10), true);
// console.log(hasPair([-5, -2, 1], -1), true);

// console.log(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 3), false);
// console.log(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 36), true);

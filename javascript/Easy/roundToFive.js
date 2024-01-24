// https://www.codewars.com/kata/582f52208278c6be55000067/train/javascript
function roundToFive(numbers) {
  return numbers.map((num) => {
    const a = num % 5;
    const b = Math.round(num / 5) * 5 - num;
    const min = Math.min(a, b);
    console.log(a, b);
    return min <= 0 ? num + min : num + min;
  });
}

const insert = (arr, fruit, index) => {
  for (let i = arr.length - 1; i >= index; i--) {
    // console.log(arr);
    arr[i + 1] = arr[i];
    if (i == index) {
      arr[i] = fruit;
    }
  }

  return arr;
};

const search = (arr, fruit) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr);
    if (arr[i] == fruit) {
      throw new Error(`${fruit} is in the index of ${i}`);
    }
    if (i == arr.length - 1) {
      arr[i + 1] = fruit;
      break;
    }
  }
  return arr;
};

// const deleteFruit = (arr, fruit) => {
//   for (let i = 0; i <= arr.length; i++) {
//     // console.log(arr);
//     if (arr[i] == fruit) {
//       throw new Error(`${fruit} is in the index of ${i}`);
//     }

//     if (i == arr.length) {
//       arr[i] = fruit;
//     }
//   }
//   return arr;
// };

// console.log(
//   insert(["apples", "bananas", "cucumbers", "dates", "elderberries"], "figs", 2)
// );

console.log(
  search(["apples", "bananas", "cucumbers", "dates", "elderberries"], "figs")
);

// console.log(
//   insert(
//     ["apples", "bananas", "cucumbers", "dates", "elderberries"],
//     "blueberry",
//     1
//   )
// );

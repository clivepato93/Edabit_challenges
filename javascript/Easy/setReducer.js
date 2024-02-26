//https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

function setReducer(input) {
  let t = true;
  while (t) {
    for (let index = 0; index < input.length; index++) {
      debugger;
      const element = input[index];
      let count = 1;
      if (element != input[index + 1]) {
        const n = input.splice(index, count, count);
        // index++;
        console.log(input);
      } else {
        for (let j = index + 1; j <= input.length; j++) {
          if (count && j == input.length) {
            const n = input.splice(index, count, count);
            break;
          }
          if (input[j] == element) {
            count++;
          } else {
            const n = input.splice(index, count, count);
            index = j - n.length;
            console.log(input);
            break;
          }
        }
      }
    }
    if (input.length == 1) t = !t;
    // t = false;
  }
  return input[0];
}

function setReducer(arr) {
  while (arr.length - 1) {
    arr = arr.reduce((a, v, i) => {
      debugger;
      if (v != arr[i - 1]) a.push(1);
      else a[a.length - 1]++;
      return a;
    }, []);
  }
  return arr.pop();
}
// console.log(setReducer([3, 1, 3, 1, 2]), 5);

console.log(setReducer([0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4]), 5);

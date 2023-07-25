//https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript
/*
function setReducer(input) {
  // code here
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (element !== input[index + 1]) input[index] = 1;
    else {
      let position = input.findIndex(
        (num) => num !== element && input.indexOf(num) > element
      );
      position = position === -1 ? input.length - index : position - index;
      //       console.log(position, input.length - index);
      //   break;
      input.splice(index, position, position);
    }
    console.log("Round", index + 1, input);
  }
    return input.length !== 1 ? setReducer(input) : input[0];
}

*/

function setReducer(input) {
  // code here
  console.log(input.filter((element, i) => element !== input[0] && i !== 0));
}
/*
function setReducer(input, index = 0) {
  // code here
  //   console.log(input, index);
  while (index < input.length) {
    let element = input[index];
    if (element !== input[index + 1]) {
      let position = input.findIndex(
        (num) => num !== element && input.lastIndexOf(num) !== element
      );
      console.log(position);
      position = position === -1 ? input.length - index : position - index;
      console.log(position, input.length - index);
      //   break;
      input.splice(index, position, position);
      //   index++;
      index += position - 1;
      console.log(index);
    } else {
      let position = input.findIndex(
        (num) => num !== element && input.indexOf(num) > element
      );
      position = position === -1 ? input.length - index : position - index;
      //       console.log(position, input.length - index);
      //   break;
      input.splice(index, position, position);
      index += position - 1;
      //   console.log(index);
    }
    console.log("Round", index, input);
  }
  return input.length !== 1 ? setReducer(input) : input[0];
}
*/

// console.log(setReducer([1, 1, 1, 1, 1, 2]), 2);
// console.log(setRedu  cer([6, 0, 5, 9, 5]), 5);
console.log(setReducer([6, 0, 5, 9, 5, 0, 0, 2, 5, 0]), 3);
// console.log(setReducer([[7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3]]), 3);

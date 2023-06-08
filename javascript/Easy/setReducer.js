//https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript

function setReducer(input) {
  // code here
  //   input.indexOf(input[0], 1);
  let digitChecker = input[0];
  console.log(input.indexOf(input[0], 1));
  const indexChecker = input.indexOf(input[0], 1);
  const newSet = new Set(input.slice(0, indexChecker));
  const setLength = newSet.size;
  console.log(newSet, setLength);
  //   const newArr = setLength>1? input.slice(0, indexChecker).map((num,i)=>input[]===0||[]?):;
  //   console.log(`the set is ${x} the length of x is ${setLength}`);
  //   console.log(
  //     input.splice(
  //       `the array is ${input}`,
  //       0,
  //       setLength > 1 ? 1 : setLength + 1,
  //       x > 1 ? 1 : setLength - 1
  //     )
  //   );

  //   while (input.length > 1) {
  //     const first = input[0];
  //     const indexChecker = input.indexOf(first, 1);
  //     console.log(input.slice(0, indexChecker));
  //     // const indexChecker = input.indexOf(input[0], 1);
  //     const x = new Set(input.slice(0, indexChecker));
  //     const setLength = x.size;
  //   console.log(
  //     input.slice(0, indexChecker),
  //     input.splice(0, x > 1 ? 1 : indexChecker + 1, x > 1 ? indexChecker : 1)
  //     )
  //     input.splice(
  //       `the array is ${input}`,
  //       0,
  //       setLength > 1 ? 1 : setLength + 1,
  //       x > 1 ? 1 : setLength - 1
  //     );
  //   }
  //   return input;
}

console.log(setReducer([0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4]), 5);

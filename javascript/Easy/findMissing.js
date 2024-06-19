// https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript

function findMissing(arr1, arr2) {
    // Your solution here
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        const pos = arr2.indexOf(element);
        if (pos == -1) {
            return element
           
        }
        else {
             arr2.splice(pos, 1);
        }
    }
  return arr2[0];
}

    console.log(
      findMissing([1, 2, 3], [1, 3]),
      2,
      "findMissing([1, 2, 3], [1, 3])"
    );
    console.log(
      findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]),
      8,
      "findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])"
    );
    console.log(findMissing([7], []), 7, "findMissing([7], [])");
    console.log(
      findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]),
      3,
      "findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])"
    );
    console.log(
      findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]),
      0,
      "findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0])"
    );
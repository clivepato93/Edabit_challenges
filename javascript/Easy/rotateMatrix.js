// https://www.codewars.com/kata/56b5dd1702a30326ce000b02/train/javascript

// function rotateMatrix(matrix, i = 0, finalMatrix = [], row = []) {
//   debugger;
//   const n = matrix[i].length;
//   for (let j = 0; j < matrix[j].length; j++) {
//     row.push(matrix[i][n - (1 + j)]);
//     if (matrix[i + 1]) {
//       rotateMatrix(matrix, (i += 1),finalMatrix, row);
//     } else {
//         finalMatrix.push(row);

//       return row;
//     }
//   }
//   return finalMatrix;
// }

function rotateMatrix(matrix) {  
//   debugger;
  const finalMatrix = [];
  for (let index = matrix[0].length-1; index >= 0; index--) {
      const row = []
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][index])
        
      }
      finalMatrix.push(row)
    
  }

  return finalMatrix;
}

console.log(
  rotateMatrix([
    [-1, 4, 5],
    [2, 3, 4],
  ]),
  [
    [5, 4],
    [4, 3],
    [-1, 2],
  ]
);

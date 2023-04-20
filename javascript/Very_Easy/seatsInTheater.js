// https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  //   console.log(nCols,nRows, col,row)
  //   785-530=255 75-43=32
  //481-80 783-130=653
  return (nCols - (col - 1)) * (nRows - row);
}

console.log(seatsInTheater(16, 11, 5, 3), 96);

console.log(seatsInTheater(1, 1, 1, 1), 0);

console.log(seatsInTheater(13, 6, 8, 3), 18);

console.log(seatsInTheater(60, 100, 60, 1), 99);

console.log(seatsInTheater(1000, 1000, 1000, 1000), 0);

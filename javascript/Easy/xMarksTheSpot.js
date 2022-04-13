// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript

const xMarksTheSpot = (input) => {
    const coords = [];
    for (let i = 0; i < input.length; i++) {
        for (let x = 0; x < input[i].length; x++) {
            if(input[i][x] == 'x') coords.push(i,x)
        }        
    }
    return coords.length==2?coords:[];
  }

  const testInput = {
    emptyArray: [],
    noX: [
      ['o', 'o'],
      ['o', 'o']
    ],
    multipleX: [
      ['x', 'o'],
      ['o', 'x']
    ],
    topLeft: [
      ['x', 'o'],
      ['o', 'o']
    ]
  };


// console.log(xMarksTheSpot(testInput.emptyArray), [], 'Return an empty array if x is an empty array');
// console.log(xMarksTheSpot(testInput.noX), [], 'Return an empty array if no x found');
// console.log(xMarksTheSpot(testInput.multipleX), [], 'Return an empty array if more than one x found');
console.log(xMarksTheSpot(testInput.topLeft), [0, 0], 'Return [0,0] when x at top left');

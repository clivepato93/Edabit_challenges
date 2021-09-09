// https://edabit.com/challenge/MXChCnzCSBobgY4Ex

function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.concat(arr[i]);
    }
    return arr2; 
  }


// Fixed
function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      for(let x = 0; x<arr[i].length;x++){
              arr2.push(arr[i][x])
          }
    }
    return arr2; 
  }
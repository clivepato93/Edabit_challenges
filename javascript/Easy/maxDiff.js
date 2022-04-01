// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

function maxDiff(list) {
    console.log(list)
    if(list==[] || list.length==1) return 0
    return  !isFinite(Math.max(...list)-Math.min(...list))?0:Math.max(...list)-Math.min(...list);
  };

// console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
// console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
// console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
// console.log(maxDiff([16]), 0);
// console.log(maxDiff([]), 0);


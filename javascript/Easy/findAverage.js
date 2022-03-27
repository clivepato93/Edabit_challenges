

var findAverage = function (nums) {
    // Code here
    return nums.reduce((t,c)=>t+c,0)/nums.length

  }

console.log(findAverage([1]), 1)
console.log(findAverage([1, 3, 5, 7]), 4)
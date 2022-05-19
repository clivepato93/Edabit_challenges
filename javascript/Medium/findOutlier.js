// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript


function findOutlier(integers){
    //your code here
    const odds = integers.filter(el => el%2==-1||el%2==1)
    const even = integers.filter(el => el%2==0)
    if(odds.length>even.length){
        return integers.find(el=> el%2==0);
    }

    return integers.find(el=> el%2==-1||el%2==1)
  }
  console.log(findOutlier([ 2, -6, 8, -10, -3 ]),-3)
  console.log(findOutlier([0, 1, 2]), 1)
  console.log(findOutlier([1, 2, 3]), 2)
  console.log(findOutlier([2,6,8,10,3]), 3)
  console.log(findOutlier([0,0,3,0,0]), 3)
  console.log(findOutlier([1,1,0,1,1]), 0)


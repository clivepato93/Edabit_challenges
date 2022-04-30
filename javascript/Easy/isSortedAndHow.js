// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

function isSortedAndHow(array) {
  const ascending = [...array].sort((a,b)=> a-b)
  const descending = [...array].sort((a,b)=> b-a)
  return ascending.every((el,i)=>ascending[i]===array[i])
  ?'yes, ascending': descending.every((el,i)=>descending[i]===array[i])?
  'yes, descending':'no';


}

// console.log(isSortedAndHow([1, 2]), 'yes, ascending');

  
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');

// console.log(isSortedAndHow([4, 2, 30]), 'no');
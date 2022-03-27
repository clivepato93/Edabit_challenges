// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/solutions/javascript/me/best_practice

function removeEveryOther(arr){
    //your code here
    return arr.filter((_,i)=> i%2==0)
  }

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
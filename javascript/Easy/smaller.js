// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

function smaller(nums) {
    //code me
    const n = []
    nums.forEach((num,i) => {
        const checker = (nums.slice(i+1)).reduce((t,c)=> c<num?t+=1:t,0)
        n.push(checker)
        
    });
    return n
    }

console.log(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
// console.log(smaller([1, 2, 3]), [0, 0, 0]);
// console.log(smaller([1, 2, 0]), [1, 1, 0]);
// console.log(smaller([1, 2, 1]), [0, 1, 0]);
// console.log(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
// console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
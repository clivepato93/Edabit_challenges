// https://www.codewars.com/kata/5d49c93d089c6e000ff8428c/train/javascript

function save(sizes, hd) {
    // your code here
    let totalFiles = 0;
    let capacity = 0;
    for (let i = 0; i < sizes.length; i++) {
        if(capacity+sizes[i]>hd){
            return totalFiles
        }
        else{
            capacity+=sizes[i]
            totalFiles++;
        }
        
    }
    return totalFiles
  }

console.log(save([4, 4, 4, 3, 3], 12), 3);
console.log(save([4, 4, 4, 3, 3], 11), 2);
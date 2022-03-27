https://www.codewars.com/kata/588ac50727eb94c87700001f/train/javascript

// const consecutiveOnes = (nums) =>  Math.max(...nums.join('').split('0').map(el=>el.length));
    //code me
// const consecutiveOnes =(nums) => {
//     const array = nums.join('').split('0');
//     let x = 0
//     for (let i = 0; i < array.length; i++) {
//         if(array[i].length>x){
//             x= array[i].length
//         }
        
//     }

//     return x
// }
 
// function consecutiveOnes (nums){
    // const str = Math.max(...nums.join('').match(/1*/g));
    // return str ? ''+str.length: 0
//     return Math.max(...nums.join("").split("0").map(s => s.length))
// }

// function consecutiveOnes (nums){
    // const str = Math.max(...nums.join('').match(/1*/g));
    // return str ? ''+str.length: 0

    // return nums.join('').match(/1*/g).sort();
  //.split("0").map(s => s.length)
// }

// function consecutiveOnes (nums){
    // const str = Math.max(...nums.join('').match(/1*/g));
    // return str ? ''+str.length: 0
    // const x  = nums.join('').match(/1*/g).sort().pop();
    // return x.length;
  //.split("0").map(s => s.length)
// }

function consecutiveOnes (nums){
    let l = 0;
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==1){
            x++;
        }
        if (!nums[i]){

                l=Math.max(l,x);
                x=0;

        }
        
    }

    return Math.max(l,x);
}

 console.log(consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]), 3);
 console.log(consecutiveOnes([1, 1, 0, 0, 1]), 2);
 console.log(consecutiveOnes([1, 1, 1, 1, 1]), 5);
 console.log(consecutiveOnes([0, 0, 0, 0, 0]), 0);
 console.log(consecutiveOnes([0, 0, 0, 0, 1]), 1);
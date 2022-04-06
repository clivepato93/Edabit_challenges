// https://www.codewars.com/kata/55960bbb182094bc4800007b

function insertDash(num) {
    //code me
    const arr = [...`${num}`]
    for (let i = 0; i < arr.length-1; i++) {
        if(/[13579]/.test(arr[i]) && /[13579]/.test(arr[i+1])){
            arr[i] = arr[i]+'-';
        }        
    }
    return arr.join('')
 }

//  preferable solution not mine solution though 
 function insertDash(num) {
    return String(num).replace(/([13579])(?=[13579])/g, '$1-');
 }
 

console.log(insertDash(454793),'4547-9-3');
// console.log(insertDash(123456),'123456');
// console.log(insertDash(1003567),'1003-567');
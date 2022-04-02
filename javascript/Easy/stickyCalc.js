

// https://www.codewars.com/kata/5900750cb7c6172207000054/train/javascript

function stickyCalc (operation, val1, val2){
    const n = +`${Math.round(val1)}${Math.round(val2)}`
    return Math.round( eval(`${n} ${operation} ${val2}`))
}


console.log(stickyCalc('+', 4, 7), 54);
console.log(stickyCalc('-', 15, 10), 1500);
console.log(stickyCalc('*', 5, 5), 275);
console.log(stickyCalc('/', 10, 7), 15);

// Note How numbers are rounded
console.log(stickyCalc('+', 4.2, 7), 54); //Output : (47) + 7 = 54 
console.log(stickyCalc('+', 4.7, 7), 64); //Output : (57) + 7 = 54

// Note that non-integer outputs are rounded
console.log(stickyCalc('/', 10, 7), 15);  //Output : (107) / 7 = 15  Not 15.2857... 
// Added to prevent flooring result to pass    
console.log(stickyCalc('/', 433, 930), 467);  
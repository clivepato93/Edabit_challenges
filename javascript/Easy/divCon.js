// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

//my solution
function divCon(x){
    const stringNums = x.reduce((t,c)=>typeof c== 'string'?t+= Number(c):t=t,0)
    const nums = x.reduce((t,c)=>typeof c== 'number'?t+=c:t=t,0)
    return nums-stringNums
}

// a better solution not mine
function divCon(x){
    return x.reduce((t,c)=>typeof c== 'string'?t-= Number(c):t+c,0)
}

// my recursive solution 
function divCon(x,total=0){
    if(!x.length){
        return total
    }
    const digit = x[0]
    return typeof digit === 'string'?divCon(x.slice(1),total-=digit):divCon(x.slice(1),total+=digit)
}




console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
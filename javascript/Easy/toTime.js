// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

function toTime(seconds) {
    //code here
    const hours = Math.floor(seconds/3600)
    seconds-=(3600*hours)
    const mins =  Math.floor(seconds/60)
    return `${hours} hour(s) and ${mins} minute(s)`
    
    }

console.log(toTime(3600), '1 hour(s) and 0 minute(s)');
console.log(toTime(3601), '1 hour(s) and 0 minute(s)');
console.log(toTime(3500), '0 hour(s) and 58 minute(s)');
console.log(toTime(323500), '89 hour(s) and 51 minute(s)');
console.log(toTime(0), '0 hour(s) and 0 minute(s)');  
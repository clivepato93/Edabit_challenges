

function getDivisorsCnt(n){
    // todo
    let original  = n;
    let numbers = 0;
    while(n){
        if(original%n==0){
            numbers++;
        }
        n--;
    }
    return numbers
}

console.log(getDivisorsCnt(1) , 1);
console.log(getDivisorsCnt(10) , 4);
console.log(getDivisorsCnt(11) , 2);
console.log(getDivisorsCnt(54) , 8);


function length(str) {
    let x = 0;
    if(str.length>x){
        return length(x+1);
    } else {
        return x;
    };
};

console.log((length('shipment'), 8));
console.log((length('apple'), 5));
console.log((length('make'), 4));
console.log((length('a'), 1));
console.log((length(''), 0));
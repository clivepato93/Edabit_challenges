// https://www.codewars.com/kata/5797bbb34be9127074000132/train/javascript


function tetration(x,y){
    const o =x;
    x= x**x
    if(y<3) return x
    y-=1;
    for (let i = 1; i < y; i++) {
        x= o**x
        
    }
    return x
    }
// console.log(tetration(4,0), 1);
// console.log(tetration(7,1), 7);
console.log(tetration(5,2), 3125);
console.log(tetration(2,3), 16);


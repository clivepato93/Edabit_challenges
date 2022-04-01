// https://www.codewars.com/kata/617bfa617cdd1f001a5cadc9/discuss

function mountainsOfHoiyama (width) {
    let final = 0;
    const l = Math.ceil(width/2);
    let x =1;
    let o = width;
    let rows = [];
    for (let i = 1; i <= l; i++) {
        while(rows.length!=x){
            if(rows.length>0){
                rows.push(o)
                rows.push(o)
            }
            else{
                rows.push(o)

            
            }
            o--;
        }
        x+=2;
        final+=rows.reduce((t,c)=>t+c,0)
        console.log(rows,i)
        if(i==2){
            o++;
        }
        rows = [];
        }

    return final
  }


//   for (let i = 0; i < x; i++) {
    // rows.push(rows.length?rows.push(o,o):rows.push(o))
    
// }

//   while(rows.length!=x){
    // if(rows.length==0){
    //     rows.push(o)
    // }
    // if(rows.length>0){
        // rows.push(rows.length?rows.push(o,o):rows.push(o))
        // rows.push(o)
    // }
    // o--;
// }

// console.log( mountainsOfHoiyama(1), 1);
// console.log( mountainsOfHoiyama(3), 7);
// console.log( mountainsOfHoiyama(5, 24));
// console.log( mountainsOfHoiyama(7), 58);
console.log( mountainsOfHoiyama(9, 115));
// console.log( mountainsOfHoiyama(11, 201));
// console.log( mountainsOfHoiyama(13, 322));
// console.log( mountainsOfHoiyama(15, 484));
// console.log( mountainsOfHoiyama(17, 693));
// console.log( mountainsOfHoiyama(19, 955));
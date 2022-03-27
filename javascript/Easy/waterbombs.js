// https://www.codewars.com/kata/5d10d53a4b67bb00211ca8af/train/javascript

 function waterbombs(fire,w,) {
    //#your code is here
    let rows = fire.split('Y').filter(el=>el);
    let i=0;
    let total=0
    while (rows.length){
      total++;
      console.log(rows.length,rows,total);
      if(rows[i]){
        rows[i] = rows[i].slice(0,w>=rows[i].length?0:-w)
        if(!rows[i]){
          rows.shift()
        } 
      }
      if(!rows[i]){
        rows.shift()

      } 
    }
    return total
  }


// new RegEx and how to use with a number variable
function waterbombs (neighborhood, spread) {
    let firePattern = new RegExp(`x{1,${spread}}`, "g")
    let fires = neighborhood.match(firePattern)
    
    if (!fires) return 0
    return fires.length
  }

console.log(waterbombs( "YxxYYYxxYxxxYYYYxxYYxxxxxYx",1),15)
// console.log(waterbombs("xxxxYxYx", 4), 3);
// console.log(waterbombs("xxYxx", 3), 2);
// console.log(waterbombs("xxxxYxYx", 4), 3);
// console.log(waterbombs("xxxxxYxYx", 2), 5);


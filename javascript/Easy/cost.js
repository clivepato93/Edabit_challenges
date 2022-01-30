// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript


function cost (mins) { 
    mins = Math.max(mins,60)
    mins -=60;
    let total = 30;
    const grace = Math.round(mins%30)
    return grace<=5 && grace?Math.ceil((mins/30)-1)*10+30:Math.ceil((mins/30))*10+30

  } 


console.log(cost(45),30);
console.log(cost(63),30);
console.log(cost(84),40);
console.log(cost(102),50);
console.log(cost(273),100);
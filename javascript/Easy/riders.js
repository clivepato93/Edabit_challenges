// https://www.codewars.com/kata/5b18e9e06aefb52e1d0001e9/train/javascript

function riders(stations) {
    let riders= 0;
    let sum = 0;
    for (let i = 0; i < stations.length; i++) {
        if(sum+stations[i]>100){
            riders++;
            sum=stations[i];
        }
        else{
            sum+=stations[i];
        }
    }
    return riders+1
  }

  function riders(stations,r=0,sum=0,i=0) {
    if(i==stations.length) return r+=1;
    
    if(sum+stations[i]>100) return riders(stations,r+=1,sum=stations[i],i+=1)
    return riders(stations,r, sum+=stations[i],i+=1);
    
  }


console.log(riders([33,40,37,32,38,47,43,43,7,37,21,25,24]),6)
// console.log(riders([18, 15]), 1);
// console.log(riders([43, 23, 40, 13]), 2);
// console.log(riders([33, 8, 16, 47, 30, 30, 46]), 3);
// console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4);
// console.log(riders([17,12,12,8,7,15,20,16,6,13,8,19,7,14,8,12,18,15,8,5,18,20,11,14,5,6,10,14,18,9,12,9,11,21,17,11,23,11,13,24,22,13,25,18,24,5,17,5,10,24,11,22,18,16,12,6,17,17,18,24,19,18,10,15,19,25,12,17,16,7,16,15,19,11,13,21,9,23,21,13,23,10,23,22,20,11,5,6,10,13,19,17,22,22,17,6,7,10,11,14,8,22,22,8,8,18,8,24,17,16,5,19,7,11,11,15,21,6,17,6,22,15,14,17,14,24,15,12,7,22,23,19,23,22,24,5,15,19,8,18,25,5,17,17,19,15,24,11,11,14,17,8,20,13,14,6,10,19,7,22,6,23,24,7,8,10,18,22,12,8,24,18,24,25,8,11,5,23,22,8,15,5,16,21 ],30))
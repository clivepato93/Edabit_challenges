// codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript


const kookaCounter =(laughing) =>{
    // Your code here!
    const up=laughing.match(/Ha[Ha]*/g)
    const ow = laughing.match(/ha[ha]*/g) 
    if(!up && !ow) return 0
    if(up && !ow) return up.length
    if(!up && ow) return ow.length
    return up.length+ow.length
  }

console.log(kookaCounter(""), 0);
console.log(kookaCounter("hahahahaha"), 1);    
console.log(kookaCounter("hahahahahaHaHaHa"), 2);    
console.log(kookaCounter("HaHaHahahaHaHa"), 3);
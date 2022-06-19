// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

function foldTo(distance,times=0,size=0.0001) {
    if(distance<0) return null






    
    return size<distance?foldTo(distance,times+=1,size*=2):times
}

console.log(foldTo(384000000),42);
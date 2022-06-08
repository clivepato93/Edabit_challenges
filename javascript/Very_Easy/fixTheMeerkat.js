// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

function fixTheMeerkat(arr) {
    //your code here 
    return [arr[arr.length-1],arr[1],arr[0]]
   }

   function fixTheMeerkat(arr) {
    //your code here 
    return arr.reverse()
   }

console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);
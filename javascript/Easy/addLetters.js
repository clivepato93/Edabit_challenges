// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript

// useful
// {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
//   h: 8,
//   i: 9,
//   j: 10,
//   k: 11,
//   l: 12,
//   m: 13,
//   n: 14,
//   o: 15,
//   p: 16,
//   q: 17,
//   r: 18,
//   s: 19,
//   t: 20,
//   u: 21,
//   v: 22,
//   w: 23,
//   x: 24,
//   y: 25,
//   z: 26
// }

function addLetters(...letters) {
    const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const obj ={};

    for (let i = 0; i < alphabetArray.length; i++) {
        obj[alphabetArray[i]] = i+1
        
    }

    const t = letters.reduce((t,c)=>t+obj[c],0);
    
    if(t%26==0||letters.length==0){
        return 'z'
    }

    return alphabetArray[t>=27?t%26-1:t-1]
  }

console.log(addLetters( 'r', 'q', 'b', 'q', 'f', 'r' ),'z')
  console.log(addLetters('a', 'b', 'c'),'f');
//   console.log(addLetters('z'),'z');
//   console.log(addLetters('a', 'b'), 'c')
//   console.log(addLetters('c'),'c')
//   console.log(addLetters('z', 'a'),'a')
//   console.log(addLetters('y', 'c', 'b'),'d')
//   console.log(addLetters(),'z')

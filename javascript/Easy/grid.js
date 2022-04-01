
// https://www.codewars.com/kata/60a94f1443f8730025d1744b/train/javascript

const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];


function grid(N) {
  //...
  const g = [];
  let start = 0;
  if(N<0) return null;
  if(!N) return ''
  for (let i = 1; i <= N; i++) {
      const row = Array.from({length:N},(_,i)=> i).map(function(e){
          if((start+e)>=26) {

        return lowerCaseLetters[(start+e)%26]
        }
        return lowerCaseLetters[(start+e)]
      })
      g.push(row.join(' '))
      start++;
  }
  return g.join('\n')
}


// console.log(grid(0), '');
// console.log(grid(1), 'a');
// console.log(grid(2), 'a b\nb c');
// console.log(grid(4), 'a b c d\nb c d e\nc d e f\nd e f g');
// console.log(grid(6), 'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k');
console.log(grid(14))
// console.log(Array.from({length:5},(_,i)=> i))
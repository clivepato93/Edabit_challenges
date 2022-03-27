// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string){
    //your code here
    return [...string].reduce((t,el) => el.charCodeAt(0)-96+t,0)
  }

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
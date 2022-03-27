

function checkExam(a1, a2) {
    // good luck
    const score = a1.reduce((t,c,i)=> a1[i]===a2[i]?t+=4:a2[i]==''?t:t-=1,0)
    return score <= 0 ? 0: score;
   }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
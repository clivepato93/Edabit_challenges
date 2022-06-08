// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript

function tripleTrouble(one, two, three){
    //Solution
    let string = ''
    for (let i = 0; i < one.length; i++) {
        string+= one[i]+two[i]+three[i]
    }
    return string
}

console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
// https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript


// Not completed yet
function testit(s){
    const obj = {'w':0,'o':0,'r':0,'d':0}
    // const regexs =[/w/,/o/,/r/,/d/]
    s = s.toLowerCase();
    let totals = 0;
    let x = 0
    for (let i = 0; i < s.length; i++) {
        // if(x ==3){
        //     totals++;
        //     x=0;
        // }
        // if(!regexs[x].test(s[i])){
        //     x=0;
        // }
        // if(regexs[x].test(s[i])){
        //     x++;
        // }

        // console.log(totals,s[i],regexs[x],x)
    }
    return  totals
  }

// console.log(testit("word"), 1, "");
// console.log(testit("hello world"), 1, "");
// console.log(testit("I love codewars."), 0, "");
// console.log(testit("My cat waiting for a dog."), 1, "");
// console.log(testit("We often read book, a word hidden in the book."), 2, "");
console.log(testit("When you in order to do something by a wrong way, your heart will missed somewhere."), 2, "");
// console.log(testit("This sentence have one word."), 1, "");
// console.log(testit("This sentence have two word, not one word."), 2, "");
// console.log(testit("One word + one word = three word ;-)"), 3, "");
// console.log(testit("Can you find more word for me?"), 1, "");
// woordrodoowroorr
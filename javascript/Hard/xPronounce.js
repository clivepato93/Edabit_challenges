// https://edabit.com/challenge/mH6Ny8eH6AStdzzyS


function xPronounce(sentence) {
    let final = []
    const w  = sentence.split(' ')
    for (const word of w) {
        if(word.length==1&&word[0]=='x'){
            final.push('ecks')
        } else if((/^x/).test(word)){
            final.push(word.replace(/x/,'z'))
        } else if((/x/g).test(word)){
            final.push(word.replace(/x/,'cks'))
        } else final.push(word)
    
    } return final.join(' ')
    
}

console.log(xPronounce("Inside the box was a xylophone"), "Inside the bocks was a zylophone")
console.log(xPronounce("The x ray is excellent"), "The ecks ray is eckscellent")
console.log(xPronounce("OMG x box unboxing video x D"), "OMG ecks bocks unbocksing video ecks D")
console.log(xPronounce("I gotta make bux but the clox are ticking!"), "I gotta make bucks but the clocks are ticking!")
console.log(xPronounce("this test does not have an x in it"), "this test does not have an ecks in it")
console.log(xPronounce("Max bax pax"), "Macks backs packs")
console.log(xPronounce("Anti vax"), "Anti vacks")
console.log(xPronounce("Who is xavier and why does he have my car"), "Who is zavier and why does he have my car")
console.log(xPronounce("OMG xylem unboxing video x D"), "OMG zylem unbocksing video ecks D")
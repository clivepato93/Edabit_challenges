// https://www.codewars.com/kata/559e5b717dd758a3eb00005a/train/javascript

function dropCap(n) {
    if(!n) return n
    const words = n.match(/\s{0,}\w{1,}\s{0,}/g)
    words.forEach(word => {
        if(word.length<=2) {word = word }
        let capitalisedWord = word.replace(/\w/,l=> l.toUpperCase())
        const index = /\w/.exec(capitalisedWord)
        word = word.slice(index,index+1)
        // word=
    });testit
    console.log(words)
}

console.log(dropCap('Apple Banana'),"Apple Banana");
// console.log(dropCap('Apple'),"Apple");
console.log(dropCap(''),"");
// console.log(dropCap('of'),"of");
// console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'),"Revelation of The Contents Outraged American Public Opinion, And Helped Generate");
// console.log(dropCap('more  than    one space between words'),"More  Than    One Space Between Words")
// console.log(dropCap('  leading spaces'),"  Leading Spaces")
// console.log(dropCap('trailing spaces   '),"Trailing Spaces   ")
// console.log(dropCap('ALL CAPS CRAZINESS'),"All Caps Craziness")
console.log(dropCap('rAnDoM CaPs CrAzInEsS'),"Random Caps Craziness")
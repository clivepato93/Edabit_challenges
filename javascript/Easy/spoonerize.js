
// https://www.codewars.com/kata/56b8903933dbe5831e000c76/train/javascript

function spoonerize(words) {
    //...aaaaand SPOONERIZE!
    const w = words.split(' ');
    const [f,l] = w
    console.log(f,l)
    return `${l.slice(0,1)+f.slice(1)} ${f.slice(0,1)+l.slice(1)}`
}
// ${w.length>2? w.slice(1)[0]:''}
console.log(spoonerize("nit picking"), "pit nicking");
console.log(spoonerize("wedding bells"), "bedding wells");
console.log(spoonerize("jelly beans"), "belly jeans");
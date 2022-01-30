


function generation(x, y) {
	const testing = {'-3':'great grand',
                     '-2':'grand',
                    '-1':'',
                    '0':'me!',
                    '1':'',
                    '2':'grand',
                    '3':'great grand'};

    const minus = {'f':'mother','m':'father'}
    const positive = {'f':'daughter','m':'son'}

    return x<0? testing[''+x]+minus[y]:x==0? testing[''+x]:testing[''+x]+positive[y]
}

console.log(generation(-3, "m"), "great grandfather", "3 generations before you, male...")
console.log(generation(1, "f"), "daughter", "1 generation after you, female...")
console.log(generation(-3, "f"), "great grandmother")
console.log(generation(-2, "m"), "grandfather")
console.log(generation(-2, "f"), "grandmother")
console.log(generation(-1, "m"), "father")
console.log(generation(-1, "f"), "mother")
console.log(generation(0, "f"), "me!")
console.log(generation(1, "m"), "son")
console.log(generation(1, "f"), "daughter")
console.log(generation(2, "m"), "grandson")
console.log(generation(2, "f"), "granddaughter")
console.log(generation(3, "m"), "great grandson")
console.log(generation(3, "f"), "great granddaughter")
console.log(generation(0, "m"), "me!")
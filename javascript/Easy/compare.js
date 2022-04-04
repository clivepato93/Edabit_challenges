


function compare(s1, s2) {
    s1 = (/[^a-zA-Z]/).test(s1)||!s1?'':s1;
    s1 = [...`${s1}`].map(el=> el.toUpperCase().charCodeAt(0)).reduce((t,c)=> t+c,0);
    s2 = (/[^a-zA-Z]/).test(s2)?'':s2;
    s2 = [...`${s2}`].map(el=> el.toUpperCase().charCodeAt(0)).reduce((t,c)=> t+c,0);

return s1==s2
}


console.log( compare("AD", "BC"), true);
console.log( compare("AD", "DD"), false);
console.log( compare("gf", "FG"), true);
console.log( compare("Ad", "DD"), false);
console.log( compare("zz1", ""), true);
console.log( compare("ZzZz", "ffPFF"), true);
console.log( compare("kl", "lz"), false);
console.log( compare("!!", "7476"), true);
console.log( compare("##", "1176"), true);

console.log( compare(null, "BC"), false);
console.log( compare(null, null), true);
console.log( compare(null, ""), true);
console.log( compare("", ""), true);


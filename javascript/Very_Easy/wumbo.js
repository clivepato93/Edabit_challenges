// https://edabit.com/challenge/9fQ4KKTjAdKeTbYxm

// first solution
// function wumbo(words) {
// 	return words.replace(/M/g,'W')
// }

function wumbo(words) {
    return [...words].map(x => x.replace('M','W')).join('')
}



console.log(wumbo("WHAT DO YOU MEAN WE'RE OUT OF MONEY"), "WHAT DO YOU WEAN WE'RE OUT OF WONEY", "You do not Wumbo.")
console.log(wumbo("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ABCDEFGHIJKLWNOPQRSTUVWXYZ", "You do not Wumbo.")
console.log(wumbo("1 WUMBO 2 WUMBO 3 WUMBO 4"), "1 WUWBO 2 WUWBO 3 WUWBO 4", "You do not Wumbo.")
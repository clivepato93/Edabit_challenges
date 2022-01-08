
// https://edabit.com/challenge/hcXPiNgjXDhs8mGmq

function simpleEncoder(str) {
	const stringToSort=[...str.toLowerCase()];
    return stringToSort.map((el,i)=>{
        if(stringToSort.indexOf(el)==stringToSort.lastIndexOf(el)){
            return '['
        } else return ']'

    }).join('')
}
    



console.log(simpleEncoder("Mubashir"), "[[[[[[[[")
console.log(simpleEncoder("Matt"), "[[]]")
console.log(simpleEncoder("Mu ba sh ir Ha ss an"), "[[][]]]]][[]]]]]]]][")
console.log(simpleEncoder("HelEn"), "[][][")
console.log(simpleEncoder("Air  force"), "[[]]][[][[")
console.log(simpleEncoder("Pakistan"), "[][[[[][")
console.log(simpleEncoder("eD  aBiT"), "[[]][[[[")
console.log(simpleEncoder("Success"), "][]][]]")
console.log(simpleEncoder("iiiiii"), "]]]]]]")
// Mubashir
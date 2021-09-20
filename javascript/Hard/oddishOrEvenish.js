// https://edabit.com/challenge/r6TSNwkLZ2DgsoKiH

function oddishOrEvenish(num) {
	const x = Array.from(String(num),Number).reduce((a,b)=> a+b,0)
    return x%2===0?'Evenish':'Oddish'
}


console.log((oddishOrEvenish(373), "Oddish"));
console.log((oddishOrEvenish(4433), "Evenish"));

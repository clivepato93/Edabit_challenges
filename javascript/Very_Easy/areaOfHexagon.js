// https://edabit.com/challenge/XQtpEsHYXFu3aZAN7


function areaOfHexagon(x) {
	return x<=0? null:Number(Number.parseFloat(3*Math.sqrt(3)*x**2/2).toFixed(1));
}

console.log(areaOfHexagon(1), 2.6)
console.log(areaOfHexagon(2), 10.4)
console.log(areaOfHexagon(3), 23.4)
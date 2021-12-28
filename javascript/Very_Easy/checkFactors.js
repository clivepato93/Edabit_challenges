// https://edabit.com/challenge/k5k3aXWp7aibft74n

function checkFactors(factors, num) {
	const divisible = (element)=> num%element ==0
	return factors.every(divisible)
}
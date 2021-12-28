// https://edabit.com/challenge/P6XbTvWyHkrpPfhvu


function coneVolume(h, r) {
	return +(Math.PI*r**2*h/3).toFixed(2)
}


console.log(coneVolume(3, 2), 12.57)
console.log(coneVolume(15, 6), 565.49)
console.log(coneVolume(18, 0), 0)
console.log(coneVolume(100, 2), 418.88)
console.log(coneVolume(1, 1), 1.05)
console.log(coneVolume(0, 30), 0)
// https://edabit.com/challenge/j3aeuun5WDXFsTYAK


function areTrue(a, b) {
	if (a == true) {
		if (b == true) {
			return "both";
		}
		else {
			return "first";
		}
	}
	else if (b = true) {
		return "second";
	}
	else {
		return "neither";
	}
}

// function above adjusted to this using the ternatory operator

const areTrue =(a,b) => a && b ? 'both' : a && !b ? 'first': !a && b ? 'second': 'neither';

console.log(areTrue(true, true), "both")
console.log(areTrue(true, false), "first")
console.log(areTrue(false, true), "second")
console.log(areTrue(false, false), "neither")
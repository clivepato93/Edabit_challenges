// https://edabit.com/challenge/3XiwjSzuMN4MQN6tJ

function fixImport(s) {
	const reWords = /(\w+)\s(\w+)\s(\w+)\s(\w+)/g;
	return s.replace(reWords,'$3 $4 $1 $2');
}

console.log(fixImport("import object from module_name"), "from module_name import object")
console.log(fixImport("import randint from random"), "from random import randint")
console.log(fixImport("import pi from math"), "from math import pi")
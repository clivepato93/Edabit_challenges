// https://edabit.com/challenge/AWENJSwyhcceiKvQX


function isJS(path) {
	return /js|jsx/.test(path)
}

console.log(isJS("/users/user.jsx"), true)
console.log(isJS("/users/user.js"), true)
console.log(isJS("/users/user.ts"), false)
console.log(isJS("/users/user.jpg"), false)
console.log(isJS("/users/user.ext"), false)
console.log(isJS("/users/user.php"), false)



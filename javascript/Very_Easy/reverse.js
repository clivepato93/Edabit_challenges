// https://edabit.com/challenge/noqGmqk6StwApSGwa

function reverse(bool) {
	return typeof bool == 'boolean' ? !bool : "boolean expected";
}

// https://edabit.com/challenge/TiAz6mfHTtkoqMszA

function reverse(str) {
	return str==false?'':reverse(str.substr(1))+str[0];
}

console.log(reverse("hello"), "olleh")
console.log(reverse("world"), "dlrow")
console.log(reverse("a"), "a")
console.log(reverse(""), "", "An empty string should return an empty string.")
// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm
function formatPhoneNumber(n) {
	return `(${n.splice(0,3).join('')}) ${n.splice(0,3).join('')}-${n.splice(0,4).join('')}`
}
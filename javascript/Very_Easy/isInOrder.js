// https://edabit.com/challenge/9GcCezhbB3DxoJ6fL

function isInOrder(str) {
	return [...str].sort().join('')===str
}
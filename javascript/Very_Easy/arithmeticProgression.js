
// https://edabit.com/challenge/udRB96tKMz43nhGkS

function arithmeticProgression(start, diff, n) {
	const f = [start]
    for (let i = 0; i < n-1; i++) {
        start+= diff
        f.push(start)
        
    } return f.join(', ')
}
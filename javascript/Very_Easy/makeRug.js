// https://edabit.com/challenge/qWhoswdp35f8xzqGw

function makeRug(m, n, s='#'){
	return Array.from({length:m}).fill(s.repeat(n))
}
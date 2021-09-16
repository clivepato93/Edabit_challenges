

function programmers(o, tw, thr) {
	const [...a]= [o,tw,thr]
    return Math.max(...a)-Math.min(...a)
}

console.log(programmers(1,   5,   9),   8)
// https://edabit.com/challenge/ezv3TCDcgAYhyL3R2

function joinPath(portion1, portion2) {
	return portion1.endsWith('/')&&!portion2.startsWith('/')?portion1+portion2
	:!portion1.endsWith('/')&&portion2.startsWith('/')?portion1+portion2
	:portion1.endsWith('/')&&portion2.startsWith('/')?portion1.replace('/','')+portion2:portion1+'/'+portion2;
}

// Better solution 

function joinPath(portion1, portion2) {
	return `${portion1.replace('/','')}/${portion2.replace('/','')}`
}

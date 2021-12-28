// https://edabit.com/challenge/eCmEgrKNtnfhpssQp

function happinessNumber(s) {
    const happy=s.match(/:\)/g)?s.match(/:\)/g).length:0
    const happy2=s.match(/\(:/g)?s.match(/\(:/g).length:0
    const sad = s.match(/:\(/g)?s.match(/:\(/g).length:0
    const sad2 = s.match(/\):/g)?s.match(/\):/g).length:0
    // !=null?s.match(/:\)|\(:/g).length:0
    // !=null?s.match(/:\(|\):/g).length:0 
	// return [s.match(/:\)|\(:/g),s.match(/:\(|\):/g)]
    return (happy+happy2)-(sad+sad2)
    // |\(:
}

console.log(happinessNumber('::::(():('), -3)
console.log(happinessNumber(':):('), -1)
console.log(happinessNumber('(:)'), 2)
console.log(happinessNumber('::::'), 0)
console.log(happinessNumber(':)::(()::'), -2)
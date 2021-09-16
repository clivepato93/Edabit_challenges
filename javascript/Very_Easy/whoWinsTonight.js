// https://edabit.com/challenge/qq2HY8vM6Gz478qD2


function whoWinsTonight(coins, space, price, size) {
    const [bill,will]=[Math.floor(coins/price),Math.floor(space/size)]
	return bill>will?'Bill':will>bill?'Will':'Tie'
}

console.log((whoWinsTonight(20, 20, 5, 10), 'Bill'))
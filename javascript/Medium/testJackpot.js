// https://edabit.com/challenge/hxyvTffvdT4E238CY


function testJackpot(result) {
	const x =[...new Set(result)]

    return x.length===1
}

console.log(testJackpot(['@', '@', '@', '@']), true)
console.log(testJackpot([':(', ':)', ':|', ':|']), false)
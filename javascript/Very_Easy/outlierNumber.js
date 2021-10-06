// https://edabit.com/challenge/rThajiu3LF7qiKpv9

function outlierNumber(arr) {
	const even =  arr.filter(val => Math.abs(val)%2===0)
    const odd =  arr.filter(val => Math.abs(val)%2===1)
    return even.length===1?even[0]:odd[0]
}

console.log(outlierNumber([2, 3, 4]), 3)
console.log(outlierNumber([2,-6,8,-10,-3]), -3)
console.log(outlierNumber([2,6,8,2,-66,34,-35,66,700,1002,-84,10,4]), -35)
// https://edabit.com/challenge/xdMPX6Ye3TDdznbGn


function justAnotherSumProblem(a, b) {
	const [c,d]=[Math.min(a,b),Math.max(a,b)]
    const final=[]
    for (let index = c; index <= d; index++) {
        final.push(index)
        
    }

    return final.reduce((total,curr)=> total+curr,0)
}


console.log(justAnotherSumProblem(90,45), 3105)
console.log(justAnotherSumProblem(100,58), 3397)
console.log(justAnotherSumProblem(1,-10), -54)
console.log(justAnotherSumProblem(-20,5), -195)
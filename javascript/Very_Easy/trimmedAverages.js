https://edabit.com/challenge/pDc7MLcGYzhCW6wRf

function trimmedAverages (arr) {
	arr.sort((a,b)=>a-b)
    const sum =Math.round(arr.slice(1,arr.length-1).reduce((total,curr)=> total+curr,0)/(arr.length-2))
    return sum
}

console.log(trimmedAverages([4, 5, 7, 100]), 6)

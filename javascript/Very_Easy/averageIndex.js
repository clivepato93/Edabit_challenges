// https://edabit.com/challenge/xn3DTHgvGspvQxmRQ

// not the prettiest

function averageIndex(arr) {
    const senarr= arr.join('')
    const newArr = arr.map((v,i)=> i)
    const f= newArr.reduce((total,curr)=>total+(+senarr.charCodeAt(curr)-96),0)/newArr.length
    return +f.toFixed(2)
	// return arr
}	


console.log(averageIndex(['a','b','c','i']), 3.75)

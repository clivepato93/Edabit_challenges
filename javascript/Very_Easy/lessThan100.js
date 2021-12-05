// https://edabit.com/challenge/9MjEpkL7yAjAqiH58
function lessThan100(a, b) {
	return (a+b)<100
}


function rangeOfNumbers(startNum, endNum) {
    if(startNum==endNum){
        return [endNum]
    } else {
        const arr = rangeOfNumbers(startNum+1,endNum)
		console.log(startNum,arr)
        arr.unshift(startNum)
        return arr
    }
    
  };


  console.log(rangeOfNumbers(6, 9));
// https://edabit.com/challenge/fK8a63ttMnt9CZmhgß

function lonelyInteger(arr) {
	for(let i=0; i<arr.length;i++){
		const number = arr[i]
		if(!arr.includes(-number)){
			return arr[i]
		}
	}
}
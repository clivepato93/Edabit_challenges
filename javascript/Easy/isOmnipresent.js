// https://edabit.com/challenge/Twbmxzd3JwkkqAWES


function isOmnipresent(arr, val) {
	return arr.every(function(row){
		return row.includes(val)
	})
}
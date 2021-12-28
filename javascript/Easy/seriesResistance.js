// https://edabit.com/challenge/JDkyQJqNfJNhvjmRW


function seriesResistance(arr) {
	const total = arr.reduce(function(t,c){
        return t+c
    },0)

    return total
}
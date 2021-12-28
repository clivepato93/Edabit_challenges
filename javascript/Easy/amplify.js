// https://edabit.com/challenge/FPHnbisnLwrQFYyAg

function amplify(num) {
	return Array.from({length:num},(_,i)=> i+1).map(el=> el%4==0?el*10:el)
}
https://edabit.com/challenge/xKKwvL2zYC8pEvMLG

function leapYear(year) {
	if(year%100===0 && year%400===0){
		return true;
	} else if (year%4===0){
		return true;
	}return false;
}

function leapYear(year) {
    return year%4===0;
}

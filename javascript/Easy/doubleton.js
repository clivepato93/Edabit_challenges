// https://edabit.com/challenge/wSJcHGp3SRKsFAS9K


function doubleton(n) {
	while(n){
		n++;
		const test = new Set(`${n}`).size
		if(test==2){
			return n
		}
	}
}
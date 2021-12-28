// https://edabit.com/challenge/dNZmjoi3Lip2j4emx

function findEvenNums(num) {
	const x = []
	for(let i=1;i<=num;i++){
		if(i%2==0){
			x.push(i)
		}
	} return x
}

const findEvenNums = (num) =>
	[...Array(num).keys()].map(n => ++n).filter(n => n % 2 == 0);
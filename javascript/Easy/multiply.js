// https://edabit.com/challenge/eXAQtdbsfodHL59Jd

const multiply = function (arr){
	
	return function (n){
		return arr.map(i=> i*n)
	};
};

const multiply = (arr, x) => (x) => arr.map(e=> e * x);

console.log(multiply([1, 2, 3])(1), [1, 2, 3])
console.log(multiply([1, 2, 3])(2), [2, 4, 6])
console.log(multiply([1, 2, 3])(0), [0, 0, 0])
console.log(multiply([4, 6, 5])(10), [40, 60, 50])
console.log(multiply([])(10), [], "should return an empty array")
// Mubashir
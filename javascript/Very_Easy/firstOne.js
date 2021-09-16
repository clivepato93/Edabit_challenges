// https://edabit.com/challenge/Rph4mYq5qtT48HCLY

/* code to minimise
function firstOne(a, b = 0 c = 0, d = 0) {
	if (a)
		return a;
	else if (b)
		return b;
  else if (c)
		return c;
  else if (d)
		return d;
	else
		return "not found";
}
*/


// my solution
const firstOne =(a, b = 0, c = 0, d = 0) => a || b || c || d || 'not found';


console.log(firstOne('Edabit'), 'Edabit')
console.log(firstOne(false), "not found")
console.log(firstOne('', 'Pikachu'), 'Pikachu')
console.log(firstOne('', 0), "not found")

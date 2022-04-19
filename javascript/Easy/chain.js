// https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}

function chain(input, fs) {
    // implement the "chain" function
    fs.forEach(func => {
        input=func(input)
    });
    return input
}

console.log(chain(2, [add, mult]), 360, "Error: chain function does not work");
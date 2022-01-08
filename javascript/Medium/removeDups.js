// https://edabit.com/challenge/Wd7WKqm95jhcAGATG


function removeDups(arr) {
	return arr.filter((el,i)=> arr.indexOf(el)==i)
}

console.log(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor'])
console.log(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
console.log(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])
console.log(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [1, 2, 3, 5, 6, 7])
console.log(removeDups(['#', '#', '%', '&', '#', '$', '&']), ['#', '%', '&', '$'])
console.log(removeDups([3, 'Apple', 3, 'Orange', 'Apple']), [3, 'Apple', 'Orange'])
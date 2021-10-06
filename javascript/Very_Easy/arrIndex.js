// https://edabit.com/challenge/xwNSxpGzwRh3brHQf

function arrIndex(arr, idx) {
	const newArr= idx.map(v=> arr.flat()[v])
    return newArr.join('')
}

results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
console.log(results1, 'mbsr')


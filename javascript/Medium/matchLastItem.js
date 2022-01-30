// https://edabit.com/challenge/jbR9NupEL8zAZkbKx


function matchLastItem(arr) {
	return arr.slice(0,arr.length-1).join('')=== arr[arr.length-1]
}


console.log(matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']), true)
console.log(matchLastItem([ 0, 1, 2, 3, 4, 5, '12345' ]), false)
console.log(matchLastItem([ 'for', 'mi', 'da', 'bel', 'formidable' ]), false)
console.log(matchLastItem([8, 'thunder', true, '8thundertrue']), true)
console.log(matchLastItem([ 1, 1, 1, '11' ]), false)
console.log(matchLastItem(['tocto','G8G','xtohkgc','3V8','ctyghrs',100.88,'fyuo','Q','toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ']), true)
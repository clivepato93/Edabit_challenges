

function checkTitle(title) {
	const list = title.split(' ');
	for(let i=0;i<list.length;i++){
		if(list[i][0]!==list[i][0].toUpperCase()){
            console.log(list[i][0],list[i][0].toUpperCase())
			return false
		}
	} return true
	// return list
}


console.log(checkTitle("A Mind Boggling Achievement"), true, "error")
console.log(checkTitle("A Simple Java Script Program!"), true, "error")
console.log(checkTitle("Water is transparent"), false, "error")


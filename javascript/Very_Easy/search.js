// https://edabit.com/challenge/z6Pxiw289JtaE2ndL


// function search(arr, item,i=0) {
// 	return arr.indexOf(item)
// }

function search(arr, item,i=0) {
	if(arr[i]==item){
        return i
    } else{
       return i<=arr.length?search(arr,item,i+1) : -1
    } 
}


console.log(search([1, 2, 3, 4], 3), 2)
console.log(search([2, 4, 6, 8, 10], 8), 3)
console.log(search([1, 3, 5, 7, 9], 11), -1)
console.log(search([1, 5, 7, 11, 25, 100, 200, 350], 5), 1)
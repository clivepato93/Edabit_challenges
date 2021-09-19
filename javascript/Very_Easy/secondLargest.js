function secondLargest(arr) {
    return arr.sort((a,b)=> a-b).slice(arr.length-2,arr.length-1)
}

console.log((secondLargest([10, 40, 30, 20, 50]), 40))

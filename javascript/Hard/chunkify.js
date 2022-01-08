


function chunkify(arr, size) {
    const final  = [];
    const multi = Math.ceil(arr.length/size)
    // console.log(multi)
    for (let i = 0; i < multi; i++) {
          final.push([...arr.slice(i*size,i*size+size)])
    } return final
}


console.log(chunkify([2, 3, 4, 5], 2), [[2, 3], [4, 5]])
console.log(chunkify([2, 3, 4, 5, 6], 2), [[2, 3], [4, 5], [6]])
console.log(chunkify([2, 3, 4, 5, 6, 7], 3), [[2, 3, 4], [5, 6, 7]])
console.log(chunkify([2, 3, 4, 5, 6, 7], 1), [[2], [3], [4], [5], [6], [7]] )
console.log(chunkify([2, 3, 4, 5, 6, 7], 7), [[2, 3, 4, 5, 6, 7]] )
console.log(chunkify([2, 3, 4, 5], 3), [[2, 3, 4], [5]])
console.log(chunkify([2, 3, 4, 5, 6, 7, 8], 3), [[2, 3, 4], [5, 6, 7], [8]])
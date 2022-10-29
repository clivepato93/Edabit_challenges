multiplicationTable = function (size) {
    const arr = []
    for (let index = 1; index < size + 1; index++) {
        let row = []
        for (let x = 0; x < size; x++) {
            const digit = ((x + 1) * index)
            row.push(digit)
        }
        arr.push(row)
        row = []
    }
    return arr
}

console.log(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);

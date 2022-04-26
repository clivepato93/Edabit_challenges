// https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript

function matrix(array) {
    const newArray = array.slice();
    for (let i = 0; i < newArray.length; i++) {
        let num = newArray[i][i]
        newArray[i][i] = num<0? 0:1 
        
    }

    return newArray
}

console.log(
    matrix([[-1, 4, -5, -9, 3],
            [6, -4, -7, 4, -5],
            [3, 5, 4, -9, -1],
            [1, 5, -7, -8, -9],
            [-3, 2, 1, -5, 6]]),

            [[0, 4, -5, -9, 3],
             [6, 0, -7, 4, -5],
             [3, 5, 1, -9, -1],
             [1, 5, -7, 0, -9],
             [-3, 2, 1, -5, 1]])

// https://edabit.com/challenge/3mKNTsZ5f7b9hHTky


function transposeMatrix(mtx) {
    const width = mtx[0].length
    const height = mtx.length
	const final = []
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            final.push(mtx[j][i])   
        }   
    }
    return final.join(' ')
}


console.log(transposeMatrix([
	["Enter"],
	["the"],
	["Matrix."]
]), "Enter the Matrix.")

console.log(transposeMatrix([
	["Unfortunately,", "be", "is.", "see"], 
	["no", "told", "You'll", "it"], 
	["one", "what", "have", "for"], 
	["can", "Matrix", "to", "yourself."]
]), "Unfortunately, no one can be told what Matrix is. You'll have to see it for yourself.")

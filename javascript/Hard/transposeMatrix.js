// https://edabit.com/challenge/3mKNTsZ5f7b9hHTky

// useful function for when needing to do through an multi row array horizontally
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

// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

function transpose(mtx) {
    const width = mtx[0].length;
  const height = mtx.length;
const final = [];
  for (let i = 0; i < width; i++) {
    const row = [];
      for (let j = 0; j < height; j++) {
          row.push(mtx[j][i]); 
      }   
    final.push(row);
  }
  return final
}

console.log(transpose([[1]]), [[1]]);
console.log(transpose([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]]);
// https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript


// useful function for when needing to do through an multi row array horizontally
function arrAdder(mtx) {
    const width = mtx[0].length
    const height = mtx.length
	const final = []
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            final.push(mtx[j][i])
            if(j==height-1){
                final.push(' ')
            }
        }   
    }
    return final.join('').slice(0,-1)
}

// a cooler solution not mine though 😀
const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');

console.log(arrAdder([
    ['J','L','L','M'],
    ['u','i','i','a'],
    ['s','v','f','n'],
    ['t','e','e','']
    ]),"Just Live Life Man");
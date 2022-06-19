// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript
// not a 7th rank KYU but a good challenge

function triangle(row) {
    // Return the answer
    if(row.length==1||new Set(row).size==1) return row[0]
    const obj={
        'GG':'G',
        'BG':'R',
        'GR':'B',
        'RG':'B',
        'BR':'G',
        'RR':'R',
        'BB':'B',
        'RB':'G',
        'GB':'R'
    }
    let loop = row.length-1;

    while(loop!=1){
        const newRow = []
        
        for (let i = 0; i < row.length-1; i++) {

            newRow.push(obj[row[i]+row[i+1]])
        }
        console.log(newRow)
        row = newRow.join('')
        loop--;

    }
    return obj[row]
}




     
// console.log(triangle('GB'), 'R');
// console.log(triangle('RRR'), 'R');
console.log(triangle('RGBG'), 'B');
// console.log(triangle('RBRGBRB'), 'G');
// console.log(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
// console.log(triangle('B'), 'B');
// console.log(triangle('GBRRGBRRBR'),'B')
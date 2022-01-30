
function findMissingLetter(array){
    for (let i = 0; i < array.length; i++) {
        const code =  array[i]
        const letter= String.fromCharCode(code.charCodeAt(0)+1)
        if(letter!=array[i+1]){
            return letter
        }
        
    }
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e');
    console.log(findMissingLetter(['O','Q','R','S']), 'P');
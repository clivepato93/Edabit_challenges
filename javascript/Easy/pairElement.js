// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
    const combos ={ 'A':['A','T'],'T':['T','A'], 'C':['C','G'], 'G':['G','C']}
    const newArr = []
    for(let letter of str){
      newArr.push(combos[letter])
    }
    return newArr;
  }
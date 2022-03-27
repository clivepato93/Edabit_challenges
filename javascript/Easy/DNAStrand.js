// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){
    //your code here
    const letters = {'A':'T','T':'A','C':'G','G':'C'}
    return [...dna].map(el=> letters[el]).join('')
  }

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"),"CATA","String GTAT is")   
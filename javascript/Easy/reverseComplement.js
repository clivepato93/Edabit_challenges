// https://www.codewars.com/kata/574a7d0dca4a8a0fbe000100/train/javascript

function reverseComplement(dna) {
    const obj = {'A':'T','C':'G','T':'A','G':'C'};
    let comp = [...dna.toUpperCase()].reverse().filter(el=> obj[el]);

    if(!dna) return ''
    else if(comp.length!=dna.length) return 'Invalid sequence'
    // your code here.join('')

    comp.forEach((letter,i)=>{
        comp[i]= obj[letter];
    })

    return comp.join('')
}    
  // comp is the complement of the reverse sequence

console.log(reverseComplement("TTCCGGAA"), "TTCCGGAA");
console.log(reverseComplement("GACTGACTGTA"),"TACAGTCAGTC");


console.log(reverseComplement(""), "");
console.log(reverseComplement("XYZ"), "Invalid sequence");
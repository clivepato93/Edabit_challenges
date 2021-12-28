
// https://edabit.com/challenge/ATbswTsEaMJb37Ez2

function indexShuffle(str) {
    const words = [...str]
    return words.filter((letter,i)=> i%2==0?letter:'').join('')+words.filter((letter,i)=> i%2==1?letter:'').join('')
}

console.log(indexShuffle("abcdef"), "acebdf")
console.log(indexShuffle("abababab"), "aaaabbbb")
console.log(indexShuffle("it was a beautiful day"), "i a  euiu atwsabatfldy")
console.log(indexShuffle("maybe"), "myeab")
console.log(indexShuffle("holiday"), "hldyoia")
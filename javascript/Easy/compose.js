// https://www.codewars.com/kata/56f253dd75e340ff670002ac/train/javascript

/*
A squared string is a string of n lines, each substring being n characters long. 
We are given two n-squared strings. For example:

s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 
plus the chars of the last line of s2.
The second line of strng has the first two chars of the 
second line of s1 plus the chars of the 
penultimate line of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of
s1 plus the first char of the first line of s2.

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq
*/

function compose(s1, s2) {
    // your code
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
        
    // }
    // + words2.slice(i-1).slice(0,)
    const words1 =s1.split('\n');
    const words2 =s2.split('\n');
    console.log(words1,words2)
    return words1.map((el,i)=> {
        
        const word = words2.slice(words2.length-1-i)
        console.log(word.slice(word.length-i))
        return el.slice(0,i+1)+word.slice(0,word.length-i)
    })

    // return words2

}

console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB"), 
            "bNkTB\nhTrWO\nRTFVi\nCnnIj")
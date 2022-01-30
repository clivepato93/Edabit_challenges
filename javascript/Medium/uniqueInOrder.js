// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    const unique = []

    for (let i = 0; i < iterable.length; i++) {
        if(!unique.length||unique[unique.length-1]!==iterable[i]){
            console.log(unique.length)
            unique.push(iterable[i])
        }        
    }

 
    return unique
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])

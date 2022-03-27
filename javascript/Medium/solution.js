// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
    const words = [];
    let start= 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i]=== string[i].toUpperCase()){
            // console.log(string.slice(start,i))
            words.push(string.slice(start,i))
            start = i;
            // console.log(start)
        }

        if(i==(string.length-1) ){
            // console.log( string.slice(start,i+1))
            words.push(string.slice(start,i+1))
        }
    }
    return words.join(' ')
    }
    // return string.slice(0, string.indexOf(/[A-Z]/g))
    // return  string.search(/[A-Z]/g)


console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
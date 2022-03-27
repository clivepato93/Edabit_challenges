// https://www.codewars.com/kata/559f44187fa851efad000087

function sevenAte9(str){
    let n =''
    for (let i = 0; i < str.length; i++) {
        if(str[i]=='9' && str[i-1]=='7' && str[i+1]=='7'){
            continue
        }
        else{
            n+=str[i]
        }
    }
    return n
}

console.log(sevenAte9('165561786121789797'),'16556178612178977');
console.log(sevenAte9('797'),'77');
console.log(sevenAte9('7979797'),'7777');
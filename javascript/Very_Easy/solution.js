// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b){
        // your code here
    return a.length>b.length? b+a+b:a+b+a;
}

console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');
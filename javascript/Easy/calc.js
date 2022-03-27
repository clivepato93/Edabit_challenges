// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

const  calc = (x) =>{
    const total1 = [...x].map(el=> el.charCodeAt(0)).join('')
    const total2 = [...x].map(el=> el.charCodeAt(0)).join('').replace(/7/g,'1')
    let total = 0 
    for (let i = 0; i < total1.length; i++) {
        const [a,b] = [+total1[i],+total2[i]];
        total+= a-b
        // console.log(a,b)
        
    }
return total
}
// - [...[...x.toUpperCase()].map(el=> el.charCodeAt(0)).join('').replace(/7/g,'1')].reduce((t,c)=> t+ +c,0)

console.log(calc('abcdef'), 6);
console.log(calc('ifkhchlhfd'), 6); 
console.log(calc('aaaaaddddr'), 30); 
console.log(calc('jfmgklf8hglbe'), 6);  
// console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96);
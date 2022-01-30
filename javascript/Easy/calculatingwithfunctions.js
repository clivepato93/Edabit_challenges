// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript


function zero(func=null) {
    if(!func){
        return 0
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`0${func}`))
}
function one(func=null) {
    if(!func){
        return 1
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`1${func}`))
}
function two(func=null) {
    if(!func){
        return 2
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`2${func}`))
}
function three(func=null) {
    if(!func){
        return 3
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`3${func}`))
}
function four(func=null) {
    
    if(!func){
        return 4
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`4${func}`))
}
function five(func=null) {
    if(!func){
        return 5
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`5${func}`))
}
function six(func=null) {
    if(!func){
        return 6
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`6${func}`))
}
function seven(func=null) {
    if(!func){
        return 7
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`7${func}`))
}
function eight(func=null) {
    if(!func){
        return 8
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`8${func}`))
}
function nine(func=null) {
    if(!func){
        return 9
    } 
    // const x = func
    // console.log(4+func)
     return Math.floor(eval(`9${func}`))
}

function plus(func=null) {return '+'+func}
function minus(func=null) {return '-'+func}
function times(func=null) {return '*'+func}
function dividedBy(func=null) {return '/'+func}



// console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);


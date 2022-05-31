// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

// not complete yet
function orderWeight(strng) {

    const letters = Array.from({length:26},(_,i)=> String.fromCharCode( i+65))
    // console.log(letters)
    // your code
    const stringNmber = (str) => [...str].reduce((t,c)=> t+Number(c),0)
    // const stringletters = (str) => [...str].reduce((t,c)=> t+ letters[+c],'')
   
    // strng  = strng.split(' ').sort((a,b)=>{ 
        // if(stringNmber(a)==stringNmber(b)) {         
            // console.log('numbers arent equal',a,b)
            // console.log(a,stringletters(a),b,stringletters(b))
            // return stringletters(a),stringletters(b)}
        // console.log('numbers are equal',a,stringValue(a),b,stringValue(b))
        // else{
            // console.log(a,b,a-b)
        //     return stringNmber(a)-stringNmber(b)
        //    return a,b
        // }
        //  })
        //stringValue(a)-stringValue(b)})
    //return strng //.join(' ')
    strng = strng.split(' ').sort()
}

// function orderWeight(strng) {
    // your code
    // const stringNmber = (str) => [...str].reduce((t,c)=> t+Number(c),0)
    // const stringValue = (str) => [...str].reduce((t,c)=> t+Number(c.charCodeAt(0)),0)
//     strng  = strng.split(' ').sort((a,b)=>b-a)
//     return strng.join(' ')
// }
// console.log(orderWeight('180 90'),'180 90')
// console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");
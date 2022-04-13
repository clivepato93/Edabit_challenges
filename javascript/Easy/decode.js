// https://www.codewars.com/kata/573d498eb90ccf20a000002a/train/javascript

// function decode(string) {
    //your code here
//     const obj = {
//         '1':'9',
//         '2':'8',
//         '3':'7',
//         '4':'6',
//         '5':'0',
//         '6':'4',
//         '7':'3',
//         '8':'2',
//         '9':'1',
//         '0':'5'
//     }
//     return [...string].map(el => obj[el]).join('')
//   }

// console.log(decode("4103432323"),"6957678787")

// https://www.codewars.com/kata/565b9d6f8139573819000056/train/javascript

function decode(message){
  const alphabetLow = ["a","b","c","d","e","f","g","h","i","j",
                     "k","l","m","n","o","p","q","r","s","t",
                     "u","v","w","x","y","z"];

  return [...message.split(' ')].map(word=>{
    const letters = [...word].map(el => alphabetLow[+ 25-alphabetLow.indexOf(el)])
    return letters.join('')
  }).join(' ')
}

console.log(decode('r slkv mlylwb wvxlwvh gsrh nvhhztv'),'i hope nobody decodes this message')
console.log(decode("sr"),"hi")
console.log(decode("svool"),"hello")
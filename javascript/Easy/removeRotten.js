// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

// function removeRotten(bagOfFruits){
    // ...
//     return bagOfFruits? bagOfFruits.map(fruit=>{
//         let newFruit = fruit.replace('rotten','');
//         return newFruit[0].toLowerCase()+newFruit.slice(1)
//         }) : []
//   }

// better solution

const removeRotten=(bagOfFruits)=> bagOfFruits.map(fruit=> fruit.replace('rotten','').toLowerCase())

console.log(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
console.log(removeRotten([]), [])   
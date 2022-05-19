// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

// function findEvenIndex(array)
// {
//   //Code goes here!

//   for (let i = 0; i < array.length; i++) {
//       const left = array.slice(0,i).reduce((t,c)=>t+c,0)
//       const right = array.slice(i+1).reduce((t,c)=>t+c,0)

//       if(left == right) return i
      
//   }

//   return -1
// }


// better solution for runtime

function findEvenIndex(array)
{
  //Code goes here!

  let left = 0;
  let right = array.reduce((t,c)=>t+c,0)
  for (let i = 0; i < array.length; i++) {
      right-= array[i]
      if(left == right) return i
      left+= array[i]      
  }
  return -1
}


console.log(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
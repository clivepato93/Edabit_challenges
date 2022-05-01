// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

function adjacentElementsProduct(array) {
    // max product
    let max;
    for (let i = 0; i < array.length-1; i++) {
        console.log(`${array[i]} * ${array[i+1]}`, array[i]*array[i+1])
        if(!max){
            max = array[i]*array[i+1];
        }
        max= array[i]*array[i+1]>max?array[i]*array[i+1]:max;
    }

    return max
  }

function adjacentElementsProduct(array) {
    return Math.max(...array.slice(0,-1).map((c,i)=> c*array[i+1]))
}

//   console.log(adjacentElementsProduct([5, 8]), 40);
  console.log(adjacentElementsProduct([1, 2, 3]), 6);
  console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
//   console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
//   console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
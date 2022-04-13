// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript

function minimumSteps(numbers, value){
    //your code here
    //not a good practice to mutate input value best to create a new value
    numbers = numbers.sort((a,b)=> a-b)
    let steps = 0;
    let n = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if(n<value){
            n+= numbers[i]
            steps++;
        }
    }
    return steps

  }

  console.log(minimumSteps([4,6,3], 7), 1);
  console.log(minimumSteps([10,9,9,8], 17), 1);
  console.log(minimumSteps([8,9,10,4,2], 23), 3);
  console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464), 8);
  console.log(minimumSteps([4,6,3], 2), 0);
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr,n){
    // ...
    const items = []

    for (let i = 0; i < arr.length; i++) {
        if(items.filter(el=>el== arr[i]).length!=n){
            items.push(arr[i])
        }
        // console.log(numbers.filter((el,i)=> el==numbers[0]))
    }

    return items;
  }

//   interesting solution but not mine
  function deleteNth(arr,x){
    var obj = {}
    return arr.filter(function(number){
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= x
    })
  }

  console.log(deleteNth([20,37,20,21], 1), [20,37,21])
  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  
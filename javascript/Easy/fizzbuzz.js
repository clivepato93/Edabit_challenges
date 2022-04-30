// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

function fizzbuzz(n)
{
  //
  const arr = []
  for (let i = 1; i <=n; i++) {

    if(i%5==0&&i%3==0){
        arr.push('FizzBuzz')
    }

    else if(i%5==0) {
        arr.push('Buzz')
    }

    else  if(i%3==0) {
        arr.push('Fizz')
    }

    else{
        arr.push(i)
    }
      
  }

  return arr
}

console.log(fizzbuzz(10),[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'])
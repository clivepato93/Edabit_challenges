// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
    const obj = {'good':0,'bad':0}
    x.forEach(idea=> obj[idea]++)
    return obj['good']>2? 'I smell a series!':obj['good']>=1?'Publish!':'Fail!'
  }

console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

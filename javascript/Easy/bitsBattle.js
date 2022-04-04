// https://www.codewars.com/kata/58856a06760b85c4e6000055/train/javascript

function bitsBattle(numbers) {
    const even  = numbers.filter(el=> el%2==0&&el)
    .map(el=> Number(el).toString(2).replace(/1/g,'')).join('');
    const odd  = numbers.filter(el=> el%2==1&&el)
    .map(el=> Number(el).toString(2).replace(/0/g,'')).join('');
    console.log(even,odd)
    return even.length<odd.length?'odds win':even.length>odd.length?'evens win':'tie'


  }


console.log(bitsBattle([5, 3, 14]), 'odds win');
console.log(bitsBattle([3, 8, 22, 15, 78]), 'evens win');
console.log(bitsBattle([]), 'tie');
console.log(bitsBattle([1, 13, 16]), 'tie');
console.log(bitsBattle([0]), 'tie');
console.log(bitsBattle([0, 1, 2]), 'tie');
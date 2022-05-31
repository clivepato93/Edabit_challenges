// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, letter){  
    //code here
    const regX = new RegExp(`${letter}`,'g')
    return str.match(regX)? str.match(regX).length:0
  }

  console.log(strCount('Hello', 'o'), 1);
  console.log(strCount('Hello', 'l'), 2);
  console.log(strCount('', 'z'), 0);
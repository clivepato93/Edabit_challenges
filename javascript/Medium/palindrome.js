

function palindrome(str) {
    const checker =str.replace(/\w/g,letter=> letter.toLowerCase()).match(/[a-z0-9]/g);
    return checker.join('') 
    //checker.reverse().join('');
  }

  
//   console.log()
console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"));
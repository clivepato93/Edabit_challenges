// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
  // your code here
  for (let i = 0; i < x.length; i++) {
    if (x[i].toLowerCase() != x[x.length - (1 + i)].toLowerCase()) {
      return false;
    }
  }

  return true;
}

function isPalindrome(x) {
  // your code here
  debugger;
  if (x.length == 0 || x.length == 1) {
    return true;
  }

  if (x[0].toLowerCase() == x[x.length - 1].toLowerCase()) {
    return isPalindrome(x.slice(1, x.length - 1));
  }
  return false;
}

// console.log(isPalindrome("a"), true);
// console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
// console.log(isPalindrome("hello"), false);
// console.log(isPalindrome("Bob"), true);
// console.log(isPalindrome("Madam"), true);
// console.log(isPalindrome("AbBa"), true);
// console.log(isPalindrome(""), true);

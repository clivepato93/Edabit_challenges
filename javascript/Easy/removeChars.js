// https://www.codewars.com/kata/59be6bdc4f98a8a9c700007d/train/javascript

/*
Let's assume we need "clean" strings.

Clean means a string should only contain letters a-z, A-Z and spaces.

We assume that there are no double spaces or line breaks.

Write a function that takes a string and returns a string without

the unnecessary characters.
*/
function removeChars(s) {
  return s.replace(/[^a-zA-Z\s]/g, "");
}

console.log(removeChars(".tree1"), "tree");
console.log(removeChars("that's a pie&ce o_f p#ie!"), "thats a piece of pie");
console.log(removeChars("john.dope@dopington.com"), "johndopedopingtoncom");
console.log(removeChars('my_list = ["a","b","c"]'), "mylist  abc");
console.log(removeChars("1 + 1 = 2"), "    ");
console.log(removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_"), "");
console.log(removeChars("test for error!"), "test for error");
console.log(removeChars('co_ol f0un%(c)t-io"n'), "cool function");

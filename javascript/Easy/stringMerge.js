// https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript

function stringMerge(string1, string2, letter){
    // Add code here :)
    return string1.slice(0,string1.indexOf(letter))+string2.slice(string2.indexOf(letter))
  }

  console.log(stringMerge("person","here", "e"), "pere");
  console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
  console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
  console.log(stringMerge("12345654321","123456789", "6"), "123456789");
  console.log(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
  console.log(stringMerge("incredible","people", "e"), "increople");
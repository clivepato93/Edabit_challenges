//https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript


function validateWord(s)
{
    s = s.toLowerCase();
  //Code goes here!
  const obj = {

  }

  const letters = [...new Set([...s.toLowerCase()])].forEach(el=> obj[el]='0')
  for (let i = 0; i < s.length; i++) {
      const letter = s[i]
      if(obj.hasOwnProperty(letter)) {

        obj[letter]++;
      }
      
  }
  const numbers = Object.values( obj);
  return numbers.every(digit=> digit==numbers[0]);
}

console.log(validateWord("abcabc"),true, "The word was: \"abcabc\" \n");
console.log(validateWord("Abcabc"),true, "The word was: \"Abcabc\" \n");
console.log(validateWord("abc123"),true, "The word was: \"abc123\" \n");
console.log(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
console.log(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
console.log(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");
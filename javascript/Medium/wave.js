// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

 function wave(str){
    // Code here
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if(str[i]==' '){
          continue
         }
         else{
           arr.push(str.substring(0,i)+str.slice(i,i+1).toUpperCase()+str.substring(i+1))
         }
        }
    return arr
  }

console.log(wave("hello"),["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
console.log(wave(" gap "),[" Gap ", " gAp ", " gaP "]);
console.log(wave("two words"),["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"])

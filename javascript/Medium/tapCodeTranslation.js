

const obj= 
[
 ['A','B','C/K','D','E'],
 ['F','G','H','I','J'],
 ['L','M','N','O','P'],
 ['Q','R','S','T','U'],
 ['V','W','X','Y','Z']]

function tapCodeTranslation(text) {
  const dots = [];
  const letters = [...text].map(el=> el.toUpperCase());
    while(letters.length){
      
      const width = obj[0].length;
      const height = obj.length;
      
      for (let i = 0; i < width; i++) {
          for (let j = 0; j < height; j++) {
            if(obj[i][j].includes(letters.slice(-1)[0])){
              dots.push(`${'.'.repeat(i+1)} ${'.'.repeat(j+1)}`)
              letters.pop();
            }
          }   
        }
      }

      return dots.reverse().join(' ')

  }

console.log(tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....");
// console.log(tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .");
// console.log(tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...");
// console.log(tapCodeTranslation("something"), ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..");
// console.log(tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .");
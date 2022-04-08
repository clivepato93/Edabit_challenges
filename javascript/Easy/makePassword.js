// https://www.codewars.com/kata/5637b03c6be7e01d99000046/train/javascript

function makePassword(phrase) {
    // Your code here
    const leters = phrase.split(' ').map(el=> el[0])
    for (let i = 0; i < leters.length; i++) {
        ///i|o|s/g
        if((/i/i).test(leters[i])) {
            leters[i]= '1'
        }
        if((/o/i).test(leters[i])) {
            leters[i]= '0'
        }
        if((/s/i).test(leters[i])) {
            leters[i]= '5'
        }
        
    }
    return leters
  }

  console.log(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
  console.log(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");
https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

function distinctDigitYear(year ,o =year) {
    //coding and coding..
    // year++;
    console.log(o)
    if(new Set(`${year}`).size==`${year}`.length && year!=o)return year
    return distinctDigitYear(year+=1,o=o)
    
  }


console.log(distinctDigitYear(1987),2013)

console.log(distinctDigitYear(2013),2014)
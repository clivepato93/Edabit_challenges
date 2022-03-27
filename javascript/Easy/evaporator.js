// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript

function evaporator(content, evap_per_day, threshold, dayCount = 0){ 
    const checker = Number.parseFloat(content*(threshold/100)).toFixed(2);
    console.log(checker)
    while (content>checker) {
        // const reducer = Number.parseFloat(content*(evap_per_day/100)).toFixed(2);
        const reducer = content*(evap_per_day/100);
        content-= reducer;
        // content = +content.toFixed(2);
        dayCount++;
        console.log(reducer,content,dayCount)
    }
    return dayCount
  }

  function evaporator(content, evap_per_day, threshold, dayCount = 0){ 
    const checker = content*(threshold/100);
    while (content>checker) {
        const reducer = content*(evap_per_day/100);
        content-= reducer;
        dayCount++;
        console.log(reducer,content,dayCount)
    }
    return dayCount
  }

// console.log(evaporator(10, 10, 5),29)
// console.log(evaporator(10,10,10),22);
// console.log(evaporator(10, 10, 10));
// console.log(evaporator(100, 5, 5));
console.log(evaporator(50, 12, 1));

/*
10 10 10
10 10 5
100 5 5
50 12 1
*/
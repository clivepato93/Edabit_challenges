// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

const humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    const animalYears1 = 15;
    const animalYears2 = 24;
    return [humanYears,
        humanYears==1?animalYears1:humanYears==2?animalYears2:animalYears2+((humanYears-2)*4),
        humanYears==1?animalYears1:humanYears==2?animalYears2:animalYears2+((humanYears-2)*5)];
  }


console.log(humanYearsCatYearsDogYears(1), [1,15,15]);


console.log(humanYearsCatYearsDogYears(2), [2,24,24]);


console.log(humanYearsCatYearsDogYears(10), [10,56,64]);
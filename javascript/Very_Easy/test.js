

/*
{
  onecat: { vowelAnimal: 1, outputNumber: 1 },
  twodog: { vowelAnimal: 1, outputNumber: 2 },
  threehorse: { vowelAnimal: 2, outputNumber: 6 },
  fivesnake: { vowelAnimal: 2, outputNumber: 10 }
}
*/

const inputValue = [
    { id: "one", number: 1, animal: "cat" },
    { id: "two", number: 2, animal: "dog" },
    { id: "three", number: 3, animal: "horse" },
    { id: "five", number: 5, animal: "snake" },
  ];

const vowels  = ['a','e','i','o','u']

const vowelChecker = (word) => [...word].reduce((t,c)=> vowels.includes(c)?t+=1:t=t,0) 
 
const output = {};
inputValue.forEach(input => {
    // console.log(vowelChecker(input.animal))
    const name = input.id+input.animal;
    // console.log(name) 
    output[name]= {vowelAnimal:vowelChecker(input.animal),outputNumber:vowelChecker(input.animal)*input.number};
    // output[input.id+input.animal]
});

console.log(output)  
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
    const testingKeys = Object.keys(source);
    const final = [];
    for (let item of collection) {
        let counter = 0;
        for (let key of testingKeys) {
            if(item[key]==source[key]){
                counter++;
            } if(counter==testingKeys.length){
                final.push(item)
            }
        }
        
    }
    return final;
  }
  
console.log(  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
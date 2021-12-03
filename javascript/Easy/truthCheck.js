// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true

function truthCheck(collection, pre) {
    return collection.every(function(item){
      return item[pre]
    });
  }


// function truthCheck(collection, pre) {
//     for (let item of collection) {
//         if(Boolean(item[pre])==false){
//             return false
//         }
//     } return true
//   }
  
 console.log( truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
 console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
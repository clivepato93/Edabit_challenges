// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// 1st solution 
// function cakes(recipe, available) {
    // const possibleCake = []
    // for (const key in recipe) {
        // if(available.hasOwnProperty(key) && isFinite(Math.floor(available[key]/recipe[key]))){
            // console.log(Math.floor(available[key]/recipe[key]))
//             possibleCake.push(Math.floor(available[key]/recipe[key]))
//         }
//         else{
//             possibleCake.push(0)
//         }
//     }
//     return Math.min(...possibleCake)
//   }

  function cakes(recipe, available) {
    return Math.min(...[...Object.keys(recipe)].map(el=> Math.floor(available[el]/recipe[el])||0));
  }

  let recipe = {flour: 500, sugar: 200, eggs: 1};
  let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
  console.log(cakes(recipe, available), 2);
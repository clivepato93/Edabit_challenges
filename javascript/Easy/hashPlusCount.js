// https://edabit.com/challenge/ydBcGvv3n447nbxCy

function hashPlusCount(str) {
	const hashes = str.match(/#/g)
	const pluses =str.match(/\+/g)
	return [hashes?hashes.length:0,pluses?pluses.length:0]
}


// function titleCase(str) {

//     return str.split(' ').map(el=> el[0].toUpperCase()+el.substring(1,el.length).toLowerCase())
//     .join(' ');
//   }
  
//   console.log( titleCase("I'm a little tea pot"));

//   function getIndexToIns(arr, num) {
//     const newArr=arr.sort((a,b)=> a-b)
//     for (let index = 0; index < newArr.length; index++) {
//         if (newArr[index]<num&&newArr[index+1]>num) {
//             return index+1
//         } else if(newArr[index]==num){
//             return index
//         } else if(newArr[arr.length-1]<num){
//             return index+1
//         }
//     }
//     return 0;
//   }

// console.log( getIndexToIns([40, 60], 50));
// console.log( getIndexToIns([3, 10, 5], 3));


// function mutation(arr) {
//     let final=0;
//     const newArr=[[...arr[0].replace(/./g,letter=>letter.toLowerCase())],
//     [...arr[1].replace(/./g,letter=>letter.toLowerCase())]];
//     for (let index = 0; index < newArr[1].length; index++) {
//         if(newArr[0].indexOf(newArr[1][index])==-1){
//             return false
//         }
        
//     } return true
// }

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["Mary", "Aarmy"]));

function chunkArrayInGroups(arr, size) {
    let final = []
    for (let index = 0; index < arr.length; index+=size) {
        let pushing = arr.slice(index,size+index)
        final.push(pushing)
    }
    return final;
}

 console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
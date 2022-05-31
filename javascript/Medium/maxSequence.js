// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

// need to complete WANT to COMPLETE!!
// const maxSequence = function(arr){
//     // ...

//     if(arr.every(el=> el>-1)){
//         return arr.reduce((t,c)=>t+c,0)
//     }

//     if(arr.every(el=> el<-0)){
//         return -1
//     }

//     const subArrays = arr.map((c,i)=> {
        
//         const x =arr.slice(i,arr.length)
        

//         return x
//     })

//     subArrays.forEach(arr => {
//         const sums = [];
//         for (let i = 0; i < sums.length; i++) {
//             const left
            
//         }
//     });
//   }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);


function run(N, M) {
	/*
	* Write your code below; return type and arguments should be according to the problem\'s requirements
	*/
	const result = [];
	for (let index = N; index <=M; index++) {
		if(index%5==0 && index%3==0){
			result.push('FizzBuzz')
		}

        else if(index%5!=0 && index%3!=0){
            result.push(index)
        }

		else if(index%5==0){
			result.push('Buzz')
		}

		else if(index%3==0){
			result.push('Fizz')
		}

        
    }

	return result.join(',')
	
}


console.log(run(1,10))
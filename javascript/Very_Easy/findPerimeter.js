// https://edabit.com/challenge/XnJ24rWW7iJkNrtsh

// function findPerimeter(length, width) {
// 	return (length*2)+(width*2)
// }

// console.log(findPerimeter(6, 7), 26)
// console.log(findPerimeter(20, 10), 60)
// console.log(findPerimeter(2, 9), 22)

// https://edabit.com/challenge/PTiLYyb4A69KZtBCg

function lessThanOrEqualToZero(num) {
	return num<=0
}

const users ={
	Alan: {
	  online: false
	},
	Jeff: {
	  online: true
	},
	Sarah: {
	  online: false
	}
  }


function countOnline(usersObj) {
	// Only change code below this line
	let check =0;
	for(let user in usersObj){
	  if(usersObj[user].online===true){
		check++;     
	  }
	  console.log(usersObj[user]) 
	}
	return check;
	// Only change code above this line
  }
  
console.log(countOnline(users))

const cat={
	'tail':1
}
console.log(cat.tail)
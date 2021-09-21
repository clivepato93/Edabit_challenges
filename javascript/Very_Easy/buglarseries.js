// https://edabit.com/challenge/cEbhy9eWeNudEuxut

/*
function makeCopy(obj) {
	let objCopy = Object.assign({},obj)
	return objCopy
}

const makeCopy= obj => ({...obj})
*/

// https://edabit.com/challenge/paMpZoEJ6gr4feMS3
function getVodkaBottle(obj, num) {
	for(const [key,value] of Object.entries(obj)){
		
		if(value ===num && key.includes('Rammstein')){
			return key
		}
	}
}


const random = Math.random()
const obj = {absinth: 100, whiskey: 100, "Rammstein A": 100, "Rammstein B": 50, "Rammstein C": random };

console.log((getVodkaBottle(obj, 100),"Rammstein A"))
console.log((getVodkaBottle(obj, 50),"Rammstein B"))
console.log((getVodkaBottle(obj, random),"Rammstein C"))
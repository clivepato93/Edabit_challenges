
// https://edabit.com/challenge/x2LS9YvyK38uH8B7J


function mostExpensive(obj) {
	const x = Object.values(obj);
    for (const key in obj) {
        if (obj[key]==Math.max(...x)) {
            return `The most expensive one is the ${key}`
            
        }
    }
}


console.log(mostExpensive({'Diamond Earrings': 980, 'Gold Watch': 250, 'Pearl Necklace': 4650}), "The most expensive one is the Pearl Necklace")
console.log(mostExpensive({'Silver Bracelet': 280,'Gemstone Earrings': 180, 'Diamond Ring': 3500}), "The most expensive one is the Diamond Ring")
console.log(mostExpensive({'Simple Gold Ring': 310, 'Silver Anklet': 110, 'Crystal Bracelet': 190}), "The most expensive one is the Simple Gold Ring")
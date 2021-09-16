

function sortDrinkByPrice(drinks) {
	console.log( drinks.sort((a,b)=> a.price-b.price))
}



const drinks1 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
	{name: 'peach', price: 23}
];

sortDrinkByPrice(drinks1)
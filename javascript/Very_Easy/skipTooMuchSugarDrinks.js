function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(drink => drink !=='cola'&& drink !=='fanta')
}

console.log(skipTooMuchSugarDrinks(["cola", "fanta"]), [])
console.log(skipTooMuchSugarDrinks(["cola", "fanta", "water"]), ["water"], "")
// https://edabit.com/challenge/GJn7xcBiCLdCNXFgy


function profit(info) {
	return Math.round(info.sellPrice*info.inventory-info.costPrice*info.inventory)

    // -info[sellPrice]*info[inventory]
}


console.log(profit({costPrice: 32.67, sellPrice: 45.00, inventory: 1200}), 14796)
console.log(profit({costPrice: 0.1, sellPrice: 0.18, inventory: 259800}), 20784)
console.log(profit({costPrice: 185.00, sellPrice: 299.99, inventory: 300}), 34497)
console.log(profit({costPrice: 378.11, sellPrice: 990.00, inventory: 99}), 60577)
console.log(profit({costPrice: 4.67, sellPrice: 5.00, inventory: 78000}), 25740)
console.log(profit({costPrice: 19.87, sellPrice: 110.00, inventory: 350}), 31546)
console.log(profit({costPrice: 2.91, sellPrice: 4.50, inventory: 6000}), 9540)
console.log(profit({costPrice: 68.01, sellPrice: 149.99, inventory: 500}), 40990)
console.log(profit({costPrice: 1.45, sellPrice: 8.50, inventory: 10000}), 70500)
console.log(profit({costPrice: 10780, sellPrice: 34999, inventory: 10}), 242190)
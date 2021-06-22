# https://edabit.com/challenge/JcmSuBX2EaPfRkqZ8
def get_total_price(groceries):
    return round(sum(dic.get("quantity")*dic.get("price")/3 for dic in groceries for k in dic),1)

def get_total_price(groceries):
    return round(sum(a*b for a,b in[(dic.get("quantity"),dic.get("price")) for dic in groceries]),1)
print(get_total_price([
	{ "product": "Milk", "quantity": 1, "price": 1.50 }
]), 1.5)

print(get_total_price([
	{ "product": "Milk", "quantity": 1, "price": 1.50 },
	{ "product": "Cereals", "quantity": 1, "price": 2.50 }
]), 4)

print(get_total_price([
	{ "product": "Milk", "quantity": 3, "price": 1.50 }
]), 4.5)

print(get_total_price([
	{ "product": "Milk", "quantity": 1, "price": 1.50 },
	{ "product": "Eggs", "quantity": 12, "price": 0.10 },
	{ "product": "Bread", "quantity": 2, "price": 1.60 },
	{ "product": "Cheese", "quantity": 1, "price": 4.50 }
]), 10.4)

print(get_total_price([
	{ "product": "Chocolate", "quantity": 1, "price": 0.10 },
	{ "product": "Lollipop", "quantity": 1, "price": 0.20 }
]), 0.3)

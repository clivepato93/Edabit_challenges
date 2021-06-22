# https://edabit.com/challenge/J6riiW5W6GMYQfCpb
def expensive_orders(orders, cost):
	return {k:v for k,v in orders.items() if v>cost}

print(expensive_orders({"a": 3000, "b": 200, "c": 1050}, 1000), {"a": 3000, "c": 1050})
print(expensive_orders({"Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000}, 20000), {"Gucci Fur": 24600})
print(expensive_orders({"Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5}, 40), {})
print(expensive_orders({"Kyoto Ticket": 10, "Museum Exhibit": 30, "Kimono": 3000}, 5), {"Kyoto Ticket": 10, "Museum Exhibit": 30, "Kimono": 3000})

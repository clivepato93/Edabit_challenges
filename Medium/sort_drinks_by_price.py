# https://edabit.com/challenge/yGBevdRmXvSyTaBSA
from operator import itemgetter
def sort_drinks_by_price(drinks):
    return sorted(drinks,key=itemgetter('price'))

drinks = [
	{"name": 'lemonade', "price": 90},
	{"name": 'lime', "price": 432},
	{"name": 'peach', "price": 23}
]

ans = [
	{"name": 'peach', "price": 23},
	{"name": 'lemonade', "price": 90},
	{"name": 'lime', "price": 432}
]

print(sort_drinks_by_price([{'name': 'lemonade', 'price': 266}, {'name': 'cola', 'price': 71}, {'name': 'lime', 'price': 467}, {'name': 'peach', 'price': 203}, {'name': 'water', 'price': 216}]), [{'name': 'cola', 'price': 71}, {'name': 'peach', 'price': 203}, {'name': 'water', 'price': 216}, {'name': 'lemonade', 'price': 266}, {'name': 'lime', 'price': 467}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 467}, {'name': 'cola', 'price': 486}, {'name': 'lime', 'price': 469}]), [{'name': 'lemonade', 'price': 467}, {'name': 'lime', 'price': 469}, {'name': 'cola', 'price': 486}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 373}, {'name': 'cola', 'price': 459}, {'name': 'lime', 'price': 461}]), [{'name': 'lemonade', 'price': 373}, {'name': 'cola', 'price': 459}, {'name': 'lime', 'price': 461}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 16}, {'name': 'cola', 'price': 284}, {'name': 'lime', 'price': 233}, {'name': 'peach', 'price': 87}]), [{'name': 'lemonade', 'price': 16}, {'name': 'peach', 'price': 87}, {'name': 'lime', 'price': 233}, {'name': 'cola', 'price': 284}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 213}, {'name': 'cola', 'price': 42}, {'name': 'lime', 'price': 478}, {'name': 'peach', 'price': 450}, {'name': 'water', 'price': 256}]), [{'name': 'cola', 'price': 42}, {'name': 'lemonade', 'price': 213}, {'name': 'water', 'price': 256}, {'name': 'peach', 'price': 450}, {'name': 'lime', 'price': 478}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 115}, {'name': 'cola', 'price': 164}, {'name': 'lime', 'price': 88}, {'name': 'peach', 'price': 57}, {'name': 'water', 'price': 407}]), [{'name': 'peach', 'price': 57}, {'name': 'lime', 'price': 88}, {'name': 'lemonade', 'price': 115}, {'name': 'cola', 'price': 164}, {'name': 'water', 'price': 407}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 382}, {'name': 'cola', 'price': 363}]), [{'name': 'cola', 'price': 363}, {'name': 'lemonade', 'price': 382}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 13}, {'name': 'cola', 'price': 184}]), [{'name': 'lemonade', 'price': 13}, {'name': 'cola', 'price': 184}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 147}, {'name': 'cola', 'price': 289}, {'name': 'lime', 'price': 42}, {'name': 'peach', 'price': 486}, {'name': 'water', 'price': 87}]), [{'name': 'lime', 'price': 42}, {'name': 'water', 'price': 87}, {'name': 'lemonade', 'price': 147}, {'name': 'cola', 'price': 289}, {'name': 'peach', 'price': 486}], 'Object is not sorted.')
print(sort_drinks_by_price([{'name': 'lemonade', 'price': 422}, {'name': 'cola', 'price': 43}]), [{'name': 'cola', 'price': 43}, {'name': 'lemonade', 'price': 422}], 'Object is not sorted.')

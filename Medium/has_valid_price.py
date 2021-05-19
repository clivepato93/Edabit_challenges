# https://edabit.com/challenge/bTQyk8xSumqLSzeXX
# challenge to fix the function
# def has_valid_price(product):
# 	return product and "price" in product and product["price"] >= 0

# works on pc but not on edabit
def has_valid_price(product):
    return 'price' in product and product["price"]>=0 and (type(product["price"])==int or type(product["price"])==float) if product else False

def has_valid_price(product):
    try:
        if 'price' in product and product["price"]>=0 and (type(product["price"])==int or type(product["price"])==float):
            return True
        return False
    except:
        return False


print(has_valid_price({ "product": "Milk", 'price': 1.50 }), True)
print(has_valid_price({ "product": "Cheese", 'price': -1 }), False)
print(has_valid_price({ "product": "Eggs", 'price': 0 }), True)
print(has_valid_price({ "product": "Flour" }), False)
print(has_valid_price({ "product": "Cerials", 'price': '3.0' }), False)
print(has_valid_price({ "product": "Beer", 'price': None }), False)
print(has_valid_price(None), False)

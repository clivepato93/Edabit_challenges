# https://edabit.com/challenge/jgrDqqNm8z2kzJ6mH
tax = 1.06
def checkout(cart):
    s=0
    for d in cart:
        if d["taxable"]==True:
            s+=(d["prc"]*tax)*d["qty"]
        else:
            s+=d["prc"]*d["qty"]
    return s
print(
	checkout([
		{ "desc": "grill", "prc": 300, "qty": 1, "taxable": True },
		{ "desc": "hotdogs", "prc": 10, "qty": 2, "taxable": False },
		{ "desc": "US Flag", "prc": 30, "qty": 1, "taxable": True }
	]), 369.8)

# print(
# 	checkout([
# 		{ "desc": "hamburger", "prc": 5, "qty": 2, "taxable": False },
# 		{ "desc": "potato salad", "prc": 8, "qty": 1, "taxable": False },
# 		{ "desc": "potato chips", "prc": 2, "qty": 2, "taxable": False },
# 	  { "desc": "soda", "prc": 3, "qty": 2, "taxable": False },
# 	  { "desc": "paper plates", "prc": 5, "qty": 1, "taxable": True },
# 	]), 33.3)
#
# print(
# 	checkout([
# 		{ "desc": "beach umbrella", "prc": 58, "qty": 1, "taxable": True },
# 		{ "desc": "beach towel", "prc": 9, "qty": 2, "taxable": True },
# 		{ "desc": "swim suit", "prc": 25, "qty": 2, "taxable": False },
# 	  { "desc": "soda", "prc": 3, "qty": 2, "taxable": False },
# 	  { "desc": "cooler", "prc": 25, "qty": 1, "taxable": True },
# 	]), 163.06)
#
# print(
# 	checkout([
# 		{ "desc": "potato chips", "prc": 2, "qty": 2, "taxable": False },
# 		{ "desc": "soda", "prc": 3, "qty": 2, "taxable": False },
# 		{ "desc": "paper plates", "prc": 5, "qty": 1, "taxable": True }
# 	]),  15.3)

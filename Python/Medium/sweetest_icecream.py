# https://edabit.com/challenge/uerTkWm9K3oMtMZKz

d={"Plain":	0,
"Vanilla":	5,
"ChocolateChip":	5,
"Strawberry":	10,
"Chocolate":	10}

class IceCream:
	def __init__(self, flavor, num_sprinkles):
		self.flavor = flavor
		self.num_sprinkles = num_sprinkles

ice1 = IceCream("Chocolate", 13)
ice2 = IceCream("Vanilla", 0)
ice3 = IceCream("Strawberry", 7)
ice4 = IceCream("Plain", 18)
ice5 = IceCream("ChocolateChip", 3)
ice6 = IceCream("Chocolate", 23)
ice7 = IceCream("Strawberry", 0)
ice8 = IceCream("Plain", 34)
ice9 = IceCream("Plain", 81)
ice10 = IceCream("Vanilla", 12)


# print(ice1.flavor)

def sweetest_icecream(lst):
    n=0
    for i in lst:
        if d.get(i.flavor)+i.num_sprinkles>n:
            n= d.get(i.flavor)+i.num_sprinkles
    return n

print(sweetest_icecream([ice1, ice2, ice3, ice4, ice5]), 23)

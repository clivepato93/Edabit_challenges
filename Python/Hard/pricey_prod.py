# https://edabit.com/challenge/SxevRSmRcshgwnAKp
def pricey_prod(d):
    c=[k for k,v in d.items() if v>=500]
    return sorted(c,key=lambda k:d[k],reverse=True)


print(pricey_prod({'Computer' : 600, 'TV' : 800, 'Radio' : 100}), ['TV','Computer'])
print(pricey_prod({'Bike1' : 510, 'Bike2' : 401, 'Bike3' : 501}), ['Bike1', 'Bike3'])
print(pricey_prod({'Calvin Klein' : 500, 'Armani' : 5000, 'Dolce & Gabbana' : 2000}), ['Armani', 'Dolce & Gabbana', 'Calvin Klein'])
print(pricey_prod({'Loafers' : 50, 'Vans' : 10, 'Crocs' : 20}), [])
print(pricey_prod({'Dell' : 400, 'HP' : 300, 'Apple' : 1200}), ['Apple'])

# Translated from JavaScript
# Originally posted by DreamArdor

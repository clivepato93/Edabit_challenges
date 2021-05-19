# https://edabit.com/challenge/tQPApXhwoQ6zztxWJ
def get_prices(lst):
    return [float(i[i.index("$")+1:i.index(")")]) for i in lst]

print(get_prices(['ice cream ($5.99)', 'banana ($0.20)', 'sandwich ($8.50)', 'soup ($1.99)']), [5.99, 0.2, 8.50, 1.99])
print(get_prices(['salad ($4.99)']), [4.99])
print(get_prices(['artichokes ($1.99)', 'rotiserrie chicken ($5.99)', 'gum ($0.75)']), [1.99, 5.99, 0.75])
print(get_prices(['pizza ($2.99)', 'shampoo ($15.75)', 'trash bags ($15.00)']), [2.99, 15.75, 15])

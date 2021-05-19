# https://edabit.com/challenge/aBbZfPAM8pKRZjC6p
def fruit_salad(fruits):
    c=[]
    # v=[]
    for fruit in fruits:
        c.append([fruit[:len(fruit)//2],fruit[len(fruit)//2:]])
    return "".join(sorted([item for sublist in c for item in sublist]))



print(fruit_salad(['apple', 'pear', 'grapes']), 'apargrapepesple')
print(fruit_salad(['banana', 'kiwi', 'strawberry', 'blueberries']), 'anabanberryblueberrieskistrawwi')
print(fruit_salad(['raspberries', 'mango']), 'erriesmangoraspb')
print(fruit_salad(['banana']), 'anaban')

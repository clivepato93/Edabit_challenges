# https://edabit.com/challenge/zDei9LFWkX9d7wXyb
def malthusian(food_growth, pop_mult):
    food_total=100
    pop_total=100
    c=0
    while pop_total<=food_total:
        c+=1
        food_total=food_total+food_growth
        pop_total=(pop_total*pop_mult-pop_total)+pop_total
    return c
    # return food_total,pop_total
print(malthusian(3900, 1.26), 31)

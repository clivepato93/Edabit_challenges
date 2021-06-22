# ttps://edabit.com/challenge/wtBko8Bc8o8Tmra3q
def halflife_calculator(mass, hlife, n):
    return [round(mass/float(2**n),3),hlife*n]


print(halflife_calculator(1000, 5730, 2), [250, 11460])
print(halflife_calculator(1600, 6, 3), [200, 18])
print(halflife_calculator(13, 500, 1), [6.5, 500])
print(halflife_calculator(100, 35, 5), [3.125, 175])
print(halflife_calculator(11037, 53, 6), [172.453, 318])

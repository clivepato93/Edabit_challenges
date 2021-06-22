# https://edabit.com/challenge/5raq8tMwYrXq2ncwf
def catch_zero_division(expr):
    try:
        if eval(expr) or not eval(expr):
            return False
    except ZeroDivisionError:
        return True


print(catch_zero_division("2 / 0"), True)
print(catch_zero_division("4 / (2 + 3 - 5)"), True)
print(catch_zero_division("2 * 5 - 3"), False)
print(catch_zero_division("3 / 0"), True)
print(catch_zero_division("23 - 23 / 23"), False)
print(catch_zero_division("3 // 0"), True)
print(catch_zero_division("0 + 1 + 2 + 3 + 0"), False)
print(catch_zero_division("0+0+0+0+0+0+0"), False)
print(catch_zero_division("0-0-0-0-0-0-0-0-0-0"), False)
print(catch_zero_division("4 / 3"), False)
print(catch_zero_division("5343456787543234567 / 743044830483009043909003"), False)
print(catch_zero_division("0 / 0"), True)
print(catch_zero_division("(-100 + 50 + 50) / (60 - 50 - 10)"), True)
print(catch_zero_division("0 + 0 + (3 / (3 - 3))"), True)
print(catch_zero_division("7 / ((7**2) - ((-7)**2))"), True)

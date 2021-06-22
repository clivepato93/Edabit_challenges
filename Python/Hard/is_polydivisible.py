# https://edabit.com/challenge/GP6cjzQ3xs9gJ8Q2b
def is_polydivisible(n):
    n=str(n)
    for i,v in enumerate(n,start=1):
        if int(n[:i])%i!=0:
            return False
    return True



print(is_polydivisible(1232), True)
print(is_polydivisible(123220), False)
print(is_polydivisible(0), True)
print(is_polydivisible(1), True)
print(is_polydivisible(141), True)
print(is_polydivisible(1234), False)
print(is_polydivisible(21234), False)
print(is_polydivisible(81352), False)
print(is_polydivisible(987654), True)
print(is_polydivisible(1020005), True)
print(is_polydivisible(9876545), True)
print(is_polydivisible(381654729), True)
print(is_polydivisible(1073741823), False)
# Mubashir

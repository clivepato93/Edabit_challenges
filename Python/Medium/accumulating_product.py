# https://edabit.com/challenge/iMRN9YGK4mcYja9rY
def accumulating_product(lst):
    number=1
    f=[]
    for i in range(0,len(lst)):
        number*=lst[i]
        f.append(number)
    return f

# https://edabit.com/challenge/iMRN9YGK4mcYja9rY
print(accumulating_product([1, 2, 3, 4]), [1, 2, 6, 24])
print(accumulating_product([5, 10, 1, 1]), [5, 50, 50, 50])
print(accumulating_product([1, 5, 7]), [1, 5, 35])
print(accumulating_product([1, 0, 1, 0]), [1, 0, 0, 0])
print(accumulating_product([1]), [1])
print(accumulating_product([1, 2, 2, 2, 2, 2, 2]), [1, 2, 4, 8, 16, 32, 64])
print(accumulating_product([1, 1, 1, 1, 1, 1, 1]), [1, 1, 1, 1, 1, 1, 1])
print(accumulating_product([]), [])

# https://edabit.com/challenge/frC4AdY2u4tm9aTRz
from math import sqrt
def standard_deviation(lst):
    mean=sum(lst)/len(lst)
    b=[(i-mean)**2 for i in lst]
    return round(sqrt(sum(b)/float(len(lst))),2)

print(standard_deviation([3,5,7]), 1,63)
print(standard_deviation([15, 15, 15, 14, 16]), 0.63)
print(standard_deviation([1, 2, 3, 4, 5]), 1.41)

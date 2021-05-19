# https://edabit.com/challenge/xBPCwB8c4rYrGqY3v

import numpy
def missing(l):
    return numpy.linspace(range(l[0],l[-1]))

print(missing([1, 3, 4, 5]), 2)
print(missing([2, 4, 6, 8, 10, 14, 16]), 12)
print(missing([12, 15, 18, 21, 24, 30, 33]), 27)
print(missing([0, 60, 180]), 120)
print(missing([-1.25, 1.25, 2.5]), 0)
print(missing([1, 19, 28]), 10)
print(missing([100, 500, 900, 1300, 2100, 2500, 2900]), 1700)
print(missing([1.5, 2, 3]), 2.5)

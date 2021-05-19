# https://edabit.com/challenge/XyEiZbRPN6tEcmEhk

from math import sqrt
def height(side):
    return str(round(side/2*sqrt(3)*10,1))+" mm"

print(height(2), "17.3 mm")

# https://edabit.com/challenge/4me7LifXBwj5rhL4n
from math import pi,sqrt
def circle_or_square(rad, area):
    return (2*pi)*rad>sqrt(area)*4
    # return 2*pi*(rad*.5)>(area*.5)*4

print(circle_or_square(16, 625), True)
print(circle_or_square(8, 144), True)
print(circle_or_square(15, 400), True)
print(circle_or_square(5, 100), False)
print(circle_or_square(18, 900), False)
print(circle_or_square(1, 4), False)

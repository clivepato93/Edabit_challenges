# https://edabit.com/challenge/uXPF7XM4KoiiSnjuA
from math import pi
def cone_volume(h, r):
    return round(pi*(r**2)*(h)/3,2)

print(cone_volume(3, 2), 12.57)
print(cone_volume(15, 6), 565.49)
print(cone_volume(18, 0), 0)
print(cone_volume(100, 2), 418.88)
print(cone_volume(1, 1), 1.05)
print(cone_volume(0, 30), 0)

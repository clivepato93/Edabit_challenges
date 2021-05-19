# https://edabit.com/challenge/iP4ixkQffELyHvHi5
from math import pi
def weight(r, h):
	return round((pi*(r**2))*h*.001,2)

print(weight(4, 10), 0.5)
print(weight(30, 60), 169.65)
print(weight(15, 10), 7.07)
print(weight(20, 40), 50.27)
print(weight(100, 30), 942.48)
print(weight(200, 300), 37699.11)
print(weight(15, 23), 16.26)
print(weight(22, 44), 66.9)

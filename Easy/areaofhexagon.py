# https://edabit.com/challenge/LByfZDbfkYTyZs8cD
from math import sqrt
def areaofhexagon(x):
	return round(3*sqrt(3)*(x**2)/2,1) if x>0 or isinstance(x,float) else None

# print(areaofhexagon(1), 2.6)
# print(areaofhexagon(2), 10.4)
print(areaofhexagon(3), 23.4)
# print(areaofhexagon(4), 41.6)
# print(areaofhexagon(5), 65)

# print(23.4*6)

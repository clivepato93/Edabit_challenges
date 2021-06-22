# https://edabit.com/challenge/sMtSzctTWs766rRL8
# my solution
import numpy
def magnitude(lst):
	return numpy.linalg.norm(lst)
# another solution
def magnitude(list):
  return sum([x**2 for x in list]) ** (0.5)


print(magnitude([3,4]),5)
print(magnitude([0,0,-10]),10)
print(magnitude([]),0)
print(magnitude([2,3,6,1,8]),10.677078252031311)
print(magnitude([9,-9,3]),13.076696830622021)
print(magnitude([-24,94,4,0,10]),97.61147473529944)

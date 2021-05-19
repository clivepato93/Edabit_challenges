# https://edabit.com/challenge/nC7iHBbN8FEPy2EJ2
class Rectangle:

	def __init__(self, sideA=0, sideB=0):
		self.sideA = sideA
		self.sideB = sideB

	def getArea(self):
		return self.sideA * self.sideB

	def getPerimeter(self):
		return 2 * (self.sideA + self.sideB)
from math import pi
class Circle:
    def __init__(self,rad=0):
        self.rad=rad

    def getArea(self):
        return pi*self.rad**2

    def getPerimeter(self):
        return 2 *pi* self.rad

circo = Circle(20)
print(round(circo.getArea()), 1257)
print(round(circo.getPerimeter()), 126)

circo1 = Circle(2)
print(round(circo1.getArea()), 13)
print(round(circo1.getPerimeter()), 13)

circo2 = Circle(4.4)
print(round(circo2.getArea()), 61)
print(round(circo2.getPerimeter()),  28)

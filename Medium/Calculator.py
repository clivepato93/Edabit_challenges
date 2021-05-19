# https://edabit.com/challenge/ta8GBizBNbRGo5iC6
class Calculator:
	# Write methods to add(), subtract(), multiply() and divide()
	def add(self,num1,num2):
		return num1+num2

	def subtract(self,num1,num2):
		return num1-num2

	def multiply(self,num1,num2):
		return num1*num2

	def divide(self,num1,num2):
		return num1/num2

calculator = Calculator()
print(calculator.add(5,5), 10, "5 + 5 = 10")
print(calculator.add(20,5), 25, "20 + 5 = 25")
print(calculator.subtract(30,5), 25, "30 - 5 = 25")
print(calculator.subtract(100,5), 95, "100 - 5 = 95")
print(calculator.multiply(5,5), 25, "5 * 5 = 25")
print(calculator.multiply(100,5), 500, "100 * 5 = 500")
print(calculator.divide(10,5), 2, "10 / 5 = 2")
print(calculator.divide(100,5), 20, "100 / 5 = 20")

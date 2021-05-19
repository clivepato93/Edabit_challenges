# https://edabit.com/challenge/FF6kYPHdAcJnoosr5

def factorial(num):
	c = 1
	for i in range(1,num+1):
		c*=i
	return c


print(factorial(2), 2)
print(factorial(6), 720)
print(factorial(3), 6)
print(factorial(12), 479001600)
print(factorial(5), 120)

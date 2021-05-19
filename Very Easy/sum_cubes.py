# https://edabit.com/challenge/3XYv6RZbrbaoTWJ4H
def sum_cubes(n):
	return sum(i**3 for i in range(1,n+1))

print(sum_cubes(1), 1)
print(sum_cubes(2), 9)
print(sum_cubes(3), 36)
print(sum_cubes(4), 100)
print(sum_cubes(5), 225)
print(sum_cubes(6), 441)
print(sum_cubes(7), 784)

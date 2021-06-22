# https://edabit.com/challenge/GbyPdqNnp75Wci7Cn

def count_ones(num):
	return bin(num).count("1")


print(count_ones(12), 2)
print(count_ones(0), 0)
print(count_ones(100), 3)
print(count_ones(101), 4)
print(count_ones(999), 8)
print(count_ones(123456789), 16)
print(count_ones(1234567890), 12)

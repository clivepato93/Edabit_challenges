# https://edabit.com/challenge/9f3Mi6vHNcm8vRcSh

from math import floor
def number_split(n):
	splits = []
	if n % 2 == 0:
		splits.append(n/2)
		splits.append(n/2)
	else:
		splits.append(floor(n/2))
		splits.append(floor(n/2+1))
	return splits

print(number_split(4), [2, 2])
print(number_split(10), [5, 5])
print(number_split(11), [5, 6])
print(number_split(0), [0, 0])
print(number_split(1), [0, 1])
print(number_split(-4), [-2, -2])
print(number_split(-5), [-3, -2])
print(number_split(-9), [-5, -4])

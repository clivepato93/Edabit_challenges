# https://edabit.com/challenge/KExMohNcKkJYeTE2E
def is_orthogonal(first, second):
	third=zip(first,second)
	return sum([x*y for x,y in third])==0
print(is_orthogonal([7, 8], [7, -6]), False)
print(is_orthogonal([-13, -26], [-8, 4]), True)
print(is_orthogonal([1, 2], [2, -1]), True)
print(is_orthogonal([2, 4, 1], [2, 1, -8]), True)
print(is_orthogonal([1, 2, 0], [2, -1, 10]), True)
print(is_orthogonal([3, 8, 9], [16, 17, -18]), False)

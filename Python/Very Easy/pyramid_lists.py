# https://edabit.com/challenge/KSQPoma9iaz5bkSnv
def pyramid_lists(n):
	return [[i]*i for i in range(1,n+1)]

def pyramid_lists(n):
	pyramid=[]
	for number in range(1,n+1):
		pyramid.append([number]*number)
	return pyramid

# print(pyramid_lists(1), [[1]])
# print(pyramid_lists(2), [[1], [2, 2]])
print(pyramid_lists(3), [[1], [2, 2], [3, 3, 3]])
# print(pyramid_lists(4), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]])
# print(pyramid_lists(5), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]])
# print(pyramid_lists(6), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6]])
# print(pyramid_lists(7), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7]])
# print(pyramid_lists(8), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8]])
# print(pyramid_lists(9), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9]])
# print(pyramid_lists(10), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [8, 8, 8, 8, 8, 8, 8, 8], [9, 9, 9, 9, 9, 9, 9, 9, 9], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]])

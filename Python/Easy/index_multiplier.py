# https://edabit.com/challenge/82BssjYWrugBjRsux

def index_multiplier(lst):
	#print([i*lst.index(i) for i in lst])
	return sum([i*index for i,index in enumerate(lst)])


print(index_multiplier([9, 3, 7, -7]), -4)
print(index_multiplier([3, 8, 6, -4]), 8)
print(index_multiplier([10, -9, -2, 0, 2]), -5)
print(index_multiplier([4, 4, 2, 2, -4]), -2)
print(index_multiplier([9, 4, 7, 5, -1, -3]), 14)
print(index_multiplier([-9, 5, 9, 5, -7, 7]), 45)
print(index_multiplier([-1, -2, 8, -5]), -1)
print(index_multiplier([7, 10, -5, -4, 6, 2]), 22)
print(index_multiplier([0, 1, 0, 1, 0, 1, 0, 1]), 16)
print(index_multiplier([-2, 5, -7, -23, 0, 14]), -8)
print(index_multiplier([53, -43, 39, -2, -11, 3]), 0)
print(index_multiplier([40, 32, -18, 48, -15]), 80)
print(index_multiplier([1, -20, -11, 4, -12, 38, -30, 34]), 170)
print(index_multiplier([-21, 30, 20, 6, -16]), 24)
print(index_multiplier([8, -24, -8, -23, 20, 32, -29, -20]), -183)
print(index_multiplier([]), 0)

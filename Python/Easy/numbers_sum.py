# https://edabit.com/challenge/jQGT8CNFcMXr55jeb
def numbers_sum(lst):
	return sum(i for i in lst if type(i)==int)

def numbers_sum(lst):
	return sum([i for i in lst if type(i)==int],0)

print(numbers_sum([1, 2, "13", "4", "645"]), 3)

# https://edabit.com/challenge/rj7E4k6vSNZ9KpT9c
def factor_chain(lst):
	return all([True if lst[-1]%i==0 else False for i in lst])

print(factor_chain([1, 2, 4, 8, 16, 32]), True)
print(factor_chain([1, 1, 1, 1, 1, 1]), True)
print(factor_chain([2, 4, 6, 7, 12]), False)
print(factor_chain([10, 1]), False)
print(factor_chain([10, 20, 30, 40]), False)
print(factor_chain([10, 20, 40]), True)
print(factor_chain([1, 1, 1, 1, 7, 49]), True)

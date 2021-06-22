# https://edabit.com/challenge/5NMfCfBNqw3iiDeeR
def sum_minimums(lst):
    return sum([min(numbers)for numbers in lst])

def sum_minimums(lst):
	min_num = []
	for num_lst in lst:
		min_num.append(min(num_lst))
	return sum(min_num)

def sum_minimums(lst):
	res = 0
	for row in lst:
		res += min(row)
	return res

print(sum_minimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)

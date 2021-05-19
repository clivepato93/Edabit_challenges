# https://edabit.com/challenge/MbPpxYWMRihFeaNPB
def sum_of_evens(lst):
	return sum([y for x in lst for y in x if y %2 ==0])

print(sum_of_evens([
		[1, 5, 1, 3],
		[4, 1, 2, 0],
		[6, 9, 7, 4],
		[5, 1, 2, 6]
	]), 24)

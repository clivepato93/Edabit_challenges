# https://edabit.com/challenge/fDfh3WJPPiiJwgTrW
def num_of_sublists(lst):
    return sum(1 for row in lst if isinstance(row,list))


print(num_of_sublists([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), 3)
print(num_of_sublists([[1, 2, 3]]), 1)
print(num_of_sublists([1, 2, 3]), 0)
print(num_of_sublists([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]), 4)

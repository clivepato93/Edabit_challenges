# https://edabit.com/challenge/vC4P2jGR6wxED7MBL
# not complete yet
def larger_than_right(lst):
    for i in range(0, len(lst)):
        if all(lst[x] < lst[i] for x in range(i+1, len(lst))):
            return [for i in range(i, len(lst))]


print(larger_than_right([3, 13, 11, 2, 1, 9, 5]), [13, 11, 9, 5])
print(larger_than_right([9, 8, 7, 6]), [9, 8, 7, 6])
print(larger_than_right([1, 2, 3, 4]), [4])
print(larger_than_right([5, 9, 8, 7]), [9, 8, 7])
print(larger_than_right([5, 5, 5, 5, 5]), [5])

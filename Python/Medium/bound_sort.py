
# https://edabit.com/challenge/o9jhv8LxsL8KsGgga
def bound_sort(lst, b):
    return sorted(lst[b[0]:b[1]+1])+lst[b[1]+1:]==sorted(lst)




print(bound_sort([1, 6, 5, 3, 8, 9], [0, 3]), True)
print(bound_sort([1, 6, 5, 3, 8, 9], [0, 2]), False)
print(bound_sort([1, 9, 2, 5, 7], [0, 4]), True)
print(bound_sort([1, 9, 2, 5, 7], [0, 3]), False)
print(bound_sort([1, 2, 3, 4, 5, 8, 9], [0, 1]), True)
print(bound_sort([1, 2, 3, 5, 4, 8, 9], [0, 4]), True)
print(bound_sort([1, 2, 3, 5, 4, 8, 9], [0, 3]), False)

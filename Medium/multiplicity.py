
# https://edabit.com/challenge/w5eFnzhADpLZSuCM3
def multiplicity(lst):
    a=sorted(set(lst),key=lst.index)
    return [[a[i],lst.count(a[i])] for i in range(len(a))]


print(multiplicity([1, 1, 1, 2, 2, 3]), [[1, 3], [2, 2], [3, 1]])
print(multiplicity([1, 1, 1, 1, 1]), [[1, 5]])
print(multiplicity([1, 5, 4, 3, 2]), [[1, 1], [5, 1], [4, 1], [3, 1], [2, 1]])
print(multiplicity([5, 5, 5, 5, 8]), [[5, 4], [8, 1]])
print(multiplicity([3, 3, 3, 0]), [[3, 3], [0, 1]])
print(multiplicity([1, 1, 2, 2, 3, 3, 4, 4]), [[1, 2], [2, 2], [3, 2], [4, 2]])
print(multiplicity([4, 4, 3, 3, 2, 2, 1, 1]), [[4, 2], [3, 2], [2, 2], [1, 2]])

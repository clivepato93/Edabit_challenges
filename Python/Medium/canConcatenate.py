# https://edabit.com/challenge/23htQEtZobC8cfwcm

def canConcatenate(lst, target):
    return sum(val for row in lst for val in row)==sum(target)


print(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7]), True)
print(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [1, 2, 3, 4, 5, 6, 7]), True)
print(canConcatenate([[2, 1, 3], [5, 4, 7, 6]], [7, 6, 5, 4, 3, 2, 1]), True)
print(canConcatenate([[2, 1, 3], [5, 4, 7, 6, 7]], [1, 2, 3, 4, 5, 6, 7]), False)
print(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]), False)
print(canConcatenate([[1, 4], [3]], [1, 3, 4]), True)
print(canConcatenate([[1, 4], [3]], [1, 2, 3, 4]), False)
print(canConcatenate([[1, 4], [3]], [4, 3, 1]), True)
print(canConcatenate([[1, 4], [2, 3]], [4, 3, 1, 2]), True)
print(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2]), True)
print(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2]), True)

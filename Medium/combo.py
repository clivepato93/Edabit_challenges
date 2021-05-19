# https://edabit.com/challenge/hD8vgeNkjXy5trX6h
from itertools import combinations

def combo(lst, n):
    return [list(i) for i in list(combinations(lst,n))]



print(combo([1, 2, 3, 4], 2), [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
print(combo([1, 2, 3, 4], 3), [[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]])
print(combo([1, 2, 3, 4], 1), [[1], [2], [3], [4]])
print(combo([1, 2, 3, 4], 5), [])
print(combo([1, 2, 3, 4], 0), [[]])
print(combo(['a', 'b', 'c'], 0), [[]])
print(combo(['a', 'b', 'c'], 4), [])
print(combo(['a', 'b', 'c'], 1), [['a'], ['b'], ['c']])
print(combo(['a', 'b', 'c'], 2), [['a', 'b'], ['a', 'c'], ['b', 'c']])
print(combo(['a', 'b', 'c'], 3), [['a', 'b', 'c']])

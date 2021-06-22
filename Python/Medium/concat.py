# https://edabit.com/challenge/woA74HtrheoQva87R
def concat(*args):
    return [item for row in args for item in row]


print(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7])
print(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7])
print(concat([1, 2], [3, 4]), [1, 2, 3, 4])
print(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4])
print(concat(['a'], ['b', 'c']), ['a', 'b', 'c'])

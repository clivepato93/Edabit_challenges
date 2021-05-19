# https://edabit.com/challenge/nrjJcg6XMcoCvKH8y

def validate_subsets(subsets, my_set):
    c=sorted(set([v for row in subsets for v in row]))
    return all(i in my_set for i in c)

print(validate_subsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3]), True)
print(validate_subsets([[1, 2, 3], [2], [3], []], [1, 2, 3]), True)
print(validate_subsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3]), False)
print(validate_subsets([[1, 2, 3, 4]], [1, 2, 3]), False)
print(validate_subsets([['a', 'b'], ['b', 'c'], ['a', 'c']], ['a', 'b', 'c']), True)
print(validate_subsets([['a', 'b', 'c'], ['b'], ['c'], []], ['a', 'b', 'c']), True)
print(validate_subsets([['a', 'b'], ['b', 'c'], ['a', 'd']], ['a', 'b', 'c']), False)
print(validate_subsets([['a', 'b', 'c', 'd']], ['a', 'b', 'c']), False)
print(validate_subsets([[True, False], [True]], [True, False]), True)
print(validate_subsets([[True], [False], []], [True, False]), True)
print(validate_subsets([[True], [True, False]], [True]), False)
print(validate_subsets([[False]], [True]), False)

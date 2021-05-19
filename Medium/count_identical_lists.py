# https://edabit.com/challenge/QugwmQ8WH6x4oqMD9

def count_identical_lists(lst1, lst2, lst3, lst4):
    c=0
    if lst2==lst4:
        c+=1
    return c



print(count_identical_lists([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]), 2)
print(count_identical_lists([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]), 0)
print(count_identical_lists([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]), 3)

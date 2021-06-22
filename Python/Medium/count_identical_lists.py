# https://edabit.com/challenge/QugwmQ8WH6x4oqMD9

def count_identical_lists(lst1, lst2, lst3, lst4):
    c=0
    lst=[lst1, lst2, lst3, lst4]
    l=[i for i in lst if lst.count(i)>=2]
    return len(l)


print(count_identical_lists([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]), 2)
print(count_identical_lists([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]), 0)
print(count_identical_lists([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]), 3)

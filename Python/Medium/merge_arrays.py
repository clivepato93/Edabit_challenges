# https://edabit.com/challenge/q7BdzRw4j7zFfFb4R
from itertools import zip_longest
def merge_arrays(a, b):
    c=[]
    while a or b:
        if a:
            c.append(a.pop(0))
        if b:
            c.append(b.pop(0))
    return c



print(merge_arrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5])
print(merge_arrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]), [1, "a", 2, "b", 3, "c", "d", "e", "f"])
print(merge_arrays(["f", "d", "w", "t"], [5, 3, 7, 8]), ["f", 5, "d", 3, "w", 7, "t", 8])
print(merge_arrays([4, 54, 7, 87], ["t", "d", "t"]), [4, "t", 54, "d", 7, "t", 87])
print(merge_arrays(["c"], [3]), [ "c", 3 ])
print(merge_arrays([4, 3, 2, 1], ["r", "d"]), [ 4, "r", 3, "d", 2, 1 ])
print(merge_arrays(["u", "k", "c"], [2, 8, 30]), ["u", 2, "k", 8, "c", 30])
print(merge_arrays(["e"], [1, 2, 3, 4, 5, 6, 7]), ["e", 1, 2, 3, 4, 5, 6, 7])
print(merge_arrays([1, 2, 3, 4, 5, 6, 7], ["e"]), [1, "e", 2, 3, 4, 5, 6, 7])
print(merge_arrays([123, 456], ["c", "b", "a"]), [123, "c", 456, "b", "a"])

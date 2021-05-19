def empty_values(lst):
    return [type(val)() if val else val for val in lst ]

print(empty_values([1, 2, 3]), [0, 0, 0])
print(empty_values([7, 3.14, "cat"]), [0, 0.0, ""])
print(empty_values([[1, 2, 3], (1,2,3), {1,2,3}]), [[], (), set()])
print(empty_values([[7, 3.14, "cat"]]), [[]])
print(empty_values([None]), [None])
print(empty_values([None, [None], (None,[None]), {None}, True, 7.0, 7, "None"]), [None,[],(),set(),False,0.0, 0, ""])

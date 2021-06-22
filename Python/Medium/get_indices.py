def get_indices(lst, el):
    c=[]
    if el not in lst:
        return c
    for i,v in enumerate(lst):
        if v==el:
            c.append(i)

    return c

print(get_indices(['a', 'a', 'b', 'a', 'b', 'a'], 'a'), [0, 1, 3, 5])
print(get_indices([1, 5, 5, 2, 7], 7), [4])
print(get_indices([1, 5, 5, 2, 7], 5),[1, 2])
print(get_indices([1, 5, 5, 2, 7], 8), [])
print(get_indices([8, 8, 8, 8, 8], 8), [0, 1, 2, 3, 4])
print(get_indices([8, 8, 7, 8, 8], 8), [0, 1, 3, 4])
print(get_indices([True, False, True, False], True), [0, 2])
print(get_indices([True, False, True, False], False), [1, 3])

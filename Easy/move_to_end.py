# https://edabit.com/challenge/nTW4KgmJxpLDXcWPt
def move_to_end(lst, el):
    end = []
    count = lst.count(el)
    for value in lst:
        if value == el:
            end.append(value)
    for value in range(count):
        lst.remove(el)           # lst.pop(lst.index(7))
    lst.extend(end)
    return lst



print(move_to_end([1, 3, 2, 4, 4, 1], 1),[3, 2, 4, 4, 1, 1])
print(move_to_end([7, 7, 7, 6, 6, 6, 6], 7), [6, 6, 6, 6, 7, 7, 7])

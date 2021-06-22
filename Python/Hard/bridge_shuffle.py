# https://edabit.com/challenge/nm8zFcqcQ9Rzu45Fm

def bridge_shuffle(lst1, lst2):
    lst=[]
    t=0
    while t<(len(lst1)+len(lst2)):
        try:
            if lst1:
                lst.append(lst1.pop(0))
            if lst2:
                lst.append(lst2.pop(0))
        except:
            continue
    return lst

print(bridge_shuffle(['A', 'A', 'A'], ['B', 'B', 'B']), ['A', 'B', 'A', 'B', 'A', 'B'])
print(bridge_shuffle(['C', 'C', 'C', 'C'], ['D']), ['C', 'D', 'C', 'C', 'C'])
print(bridge_shuffle([1, 3, 5, 7], [2, 4, 6]), [1, 2, 3, 4, 5, 6, 7])
print(bridge_shuffle([10, 9, 8], [1, 2, 3, 4]), [10, 1, 9, 2, 8, 3, 4])
print(bridge_shuffle(['h', 'h', 'h'], ['a', 'a', 'a']), ['h', 'a', 'h', 'a', 'h', 'a'])

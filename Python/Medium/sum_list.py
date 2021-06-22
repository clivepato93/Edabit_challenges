# https://edabit.com/challenge/pyMScvcjbxG7rMcNT
def sum_list(lst):
    s=[]
    for i in lst:
        if type(i)==list:
            for v in i:
                if type(v)==list:
                    for c in v:
                        s.append(c)
                else:
                    s.append(v)

        else:
            s.append(i)
    return sum(s)


print(sum_list([1, 2, 3]), 6)
print(sum_list([1, [1, 2], [3, 1]]), 8)
print(sum_list([[1, 1], [2, 8], 8]), 20)
print(sum_list([1, 2]), 3)
print(sum_list([1, [2, [1]], 3]), 7)

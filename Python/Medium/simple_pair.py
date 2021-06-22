# https://edabit.com/challenge/PGqy3SRaobbtFfspW
def simple_pair(lst, n):
    f=[]
    for i in range(len(lst)):
        for x in range(i+1,len(lst)):
            if (lst[i]*lst[x])==n:
                f.append(lst[i])
                f.append(lst[x])
    return f[:2] if f[:2] else None


print(simple_pair([1, 2, 3], 3), [1, 3])
print(simple_pair([1, 2, 3], 6), [2, 3])
print(simple_pair([1, 2, 3], 7), None)
print(simple_pair([1, 2, 3, 6], 6), [1, 6])
print(simple_pair([1, 2, 3, 4, 5, 6], 15), [3, 5])
print(simple_pair([0, 0, 2], 4), None)
print(simple_pair([0, 0, 2, 2], 4), [2, 2])
print(simple_pair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 4), [-2, -2])
print(simple_pair([-3, -2, -2, -1, 0, 1, 2, 3, 4], 0), [-3, 0])
print(simple_pair([-3, -2, -1, 0, 1, 2, 3, 4], 4), [1, 4])

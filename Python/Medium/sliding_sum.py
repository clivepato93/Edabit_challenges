def sliding_sum(lst, n, k):
    l=[]
    for i in range(0,len(lst)):
        for x in range(1,len(lst)+1):
            if sum(lst[i:x])==k and len(lst[i:x])==n:
                l.append(lst[i:x])
    return l

print(sliding_sum([1, 4, 2, 3, 5, 0], 2, 5), [[1, 4], [2, 3], [5, 0]])
print(sliding_sum([5, 5, 5, 5, 5], 1, 5), [[5], [5], [5], [5], [5]])
print(sliding_sum([5, 5, 5, 5, 5], 5, 24), [])
print(sliding_sum([3, 2, 1, 1, 3, 2], 4, 7), [[3, 2, 1, 1], [2, 1, 1, 3], [1, 1, 3, 2]])
print(sliding_sum([3, 4, 1, 9, 9, 0, 3, 5, 4], 3, 8), [[3, 4, 1], [0, 3, 5]])

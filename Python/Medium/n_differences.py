
def n_differences(lst):
    while len(lst)!=1:
        lst=[lst[i]-lst[i-1] for i in range(1,len(lst))]
    return lst[0]

    # lst=[lst[i]-lst[i-1] for i in range(1,len(lst))]
    # return [lst[i]-lst[i-1] for i in range(1,len(lst))]

print(n_differences([5, 1, 9, 3, 4, 0]), -80)
print(n_differences([8, 9, 2, 5, 4, 3, 3, 1, 6]), -94)
print(n_differences([5, 1, 9, 6, 1, 7, 3, 4]), 118)
print(n_differences([1, 1, 1, 1]), 0)
print(n_differences([5, 9, 7, 3]), 4)
print(n_differences([1, 5, 3, 9, 7]), -30)
print(n_differences([5, 8, 8]), -3)
print(n_differences([4, 0, 0, 0, 1]), 5)
print(n_differences([3, 5]), 2)

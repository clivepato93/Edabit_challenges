# https://edabit.com/challenge/Yfksxs7kyJf6B3yvK

def min_miss_pos(lst):
    lst=[i for i in sorted(lst) if i>=0]
    if 1 not in lst:
        return 1
    for i in range(0,len(lst)-1):
        if lst[i+1]-lst[i]==2:
            return lst[i]+1
    else:
        return max(lst)+1




print(min_miss_pos([-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2]), 8)
print(min_miss_pos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9]), 2)
print(min_miss_pos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9]), 1)
print(min_miss_pos([4, 2, 9, 6, 1, 3, -2, 10, 3, 0, 9, 7, 3]), 5)
print(min_miss_pos([0, -4, -4, -1, -9, -4, -5, -2, -10, -7, -6, -3, -10, -9]), 1)
print(min_miss_pos([7, 6, 5, 4, 3, 2, 1]), 8)

# https://edabit.com/challenge/zYr4v5gb43kJPje9g
def moving_partition(lst):
    c=[]
    b=1
    for i in range(len(lst)-1):
        c.append([lst[:b],lst[b:]])
        b+=1
    return c

print(moving_partition([1, 2, 3, 4, 5]), [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]])
print(moving_partition([-1, -1, -1, -1]), [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]])
print(moving_partition([8, 9, 10]), [[[8], [9, 10]], [[8, 9], [10]]])
print(moving_partition([]), [])

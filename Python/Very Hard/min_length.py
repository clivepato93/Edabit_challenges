# https://edabit.com/challenge/TmasgxCm6iz3gTGHk

def min_length(lst, n):
    f=[]
    for c in range(0,len(lst)):
        for i in range(1,len(lst)+1):
            if sum(lst[c:i])>n:
                f.append(lst[c:i])
    return min([len(row) for row in f]) if f else -1

print(min_length([5, 10, 2, -1, 3, 4], 9), 1)
print(min_length([3, -1, 4, -2, -7, 2], 4), 3)
print(min_length([-5, 3, 2, 7, 8, 9, -1, 5], 16), 2)
print(min_length([1, 0, -1, 1, 1], 1), 2)
print(min_length([1, 0, 1, 1, -1, 0, 1], 2), 4)
print(min_length([1, 0, 0, 0, 1], 1), 5)
print(min_length([1, 0, 1, 0, 1], 1), 3)
print(min_length([-1, 1, 1, 0, 1, 1], 3), 5)
print(min_length([3, -1, 4, 3, 0, 1, 2], 7), 4)
print(min_length([0, 1, 1, 0], 2), -1)

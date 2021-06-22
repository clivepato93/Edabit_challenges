# https://edabit.com/challenge/wuQWimjDwkpnd4xJL
def balanced(lst):
    if sum(lst[:len(lst)//2])>sum(lst[len(lst)//2:]):
        return lst[:len(lst)//2]*2
    elif sum(lst[:len(lst)//2])==sum(lst[len(lst)//2:]):
        return lst
    else:
        return lst[len(lst)//2:]*2

print(balanced([1, 2, 4, 6, 3, 1]), [6, 3, 1, 6, 3, 1])
print(balanced([88, 3, 27, 5, 9, 0, 13, 10]), [88, 3, 27, 5, 88, 3, 27, 5])
print(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]), [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6])
print(balanced([0, 1, 1, 1]), [1, 1, 1, 1])
print(balanced([100, 55]), [100, 100])

# Author : Jeroen Ndh

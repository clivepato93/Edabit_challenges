# https://edabit.com/challenge/9BJzrtpdMP8JFQg74
def twins(lst):
    a=sum(lst)
    c=0
    for i in range(0,len(lst)):
        if c<a/2:
            c+=lst[i]
        else:
            return max(1,lst.index(lst[i]))

print(twins([1, 2, 3, 4, 5, 5]), 4)
print(twins([3, 3]), 1)
print(twins([10, 20, 30, 5, 40, 50, 40, 15]), 5)
print(twins([3, 4, 6, 7, 6]), 3)

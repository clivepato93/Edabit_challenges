# https://edabit.com/challenge/u4rHyBDs5RM2PfNxy

def count_ones(lst):
    s=0
    for i in range(0,len(lst)-1):
        if lst[i]==1 and lst[i+1]==1:
            s+=1
    return s
print(count_ones([1, 1, 1, 1, 1]), 1)
print(count_ones([1, 1, 1, 1, 0]), 1)
print(count_ones([0, 0, 0, 0, 0]), 0)
print(count_ones([1, 0, 0, 0, 0]), 0)
print(count_ones([1, 0, 1, 0, 1]), 0)
print(count_ones([1, 0, 0, 0, 1, 0, 0, 1, 1]), 1)
print(count_ones([1, 1, 0, 1, 1, 0, 0, 1, 1]), 3)
print(count_ones([1, 0, 0, 1, 1, 0, 0, 1, 1]), 2)
print(count_ones([1, 0, 0, 1, 1, 0, 1, 1, 1]), 2)
print(count_ones([1, 0, 1, 0, 1, 0, 1, 0]), 0)
print(count_ones([1, 1, 1, 1, 0, 0, 0, 0]), 1)
print(count_ones([1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1]), 3)

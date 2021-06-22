# https://edabit.com/challenge/T3CDjiW46KT8si6A8
def product(lst):
    u=sorted(list(set(lst)))
    first=max(lst)
    second=[i for i in u if i!=first]
    return first*second[-1] if second else first*first
print(product([2, 3, 1, -1, 2]), 6)
print(product([-2, -2, -1, -1]), 2)
print(product([8, 8, 8]), 64)

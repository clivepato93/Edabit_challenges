# https://edabit.com/challenge/BmZ6PGMJiLWMzgvos
def is_special_array(lst):
    eve=[i for i in lst[::2] if lst.index(i)%2==0 and i%2==0]
    odd=[i for i in lst[1::2] if lst.index(i)%2!=0 and i%2!=0]
    return len(eve+odd)==len(lst)
    # return all((i,v) for i,v in enumerate(lst[::2]) if i%2==0 and v%2==0) and all((i,v) for i,v in enumerate(lst[1::2]) if i%2!=0 and v%2!=0)

print(is_special_array([2, 7, 4, 9, 6, 1, 6, 3]), True)
print(is_special_array([2, 7, 9, 1, 6, 1, 6, 3]), False)
print(is_special_array([2, 7, 8, 8, 6, 1, 6, 3]), False)
print(is_special_array([1, 1, 1, 2]), False)
print(is_special_array([2, 2, 2, 2]), False)
print(is_special_array([2, 1, 2, 1]), True)
print(is_special_array([4, 5, 6, 7]), True)
print(is_special_array([4, 5, 6, 7, 0, 5]), True)

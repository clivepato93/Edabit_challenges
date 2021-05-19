# https://edabit.com/challenge/Box2A6Rb94ao8wAye
def leader(lst):
    c=lst.index(max(lst))
    return [lst[i] for i in range(c,len(lst)) if all(lst[i]>n for n in lst[i+1:])]

print(leader([2, 3, 20, 15, 8, 3]), [20, 15, 8, 3])
print(leader([2, 3, 20, 15, 26, 3]), [26, 3])
print(leader([1, 2, 3, 4, 3, 10]), [10])
print(leader([500, 400, 300, 200, 100, 50, 10, 5]), [500, 400, 300, 200, 100, 50, 10, 5])
print(leader([8, 7, 1, 2, 10, 3, 5]), [10, 5])

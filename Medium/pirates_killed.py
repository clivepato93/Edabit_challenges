# https://edabit.com/challenge/eraBhwF8HkJDAa2pS
def pirates_killed(gold, tolerance):
    a=[max(gold)-i for i in gold]
    c=[(a,b) for a,b in  list(zip(a,tolerance))]
    return any(a>b for a,b in c)


print(pirates_killed([3, 5, 8, 3, 4], [10, 4, 2, 5, 5]), False)
print(pirates_killed([3, 5, 8, 3, 4], [10, 4, 2, 5, 1]), True)
print(pirates_killed([3, 3, 10], [7, 7, 0]), False)
print(pirates_killed([3, 3, 10], [6, 6, 0]), True)
print(pirates_killed([3, 3, 3], [0, 0, 0]), False)
print(pirates_killed([3, 3, 4, 4], [0, 0, 1, 1]), True)
print(pirates_killed([3, 3, 4, 4], [1, 1, 0, 0]), False)
print(pirates_killed([3, 3, 4, 4], [0, 0, 0, 1]), True)
print(pirates_killed([3, 3, 4, 4, 5], [0, 0, 0, 1, 1]), True)

# https://edabit.com/challenge/KcnQtNoX5uC6PzpEF

def check_sum(lst, n):
    return any(lst[i]+lst[x]==n for i in range(len(lst)) for x in range(1,len(lst)))

def check_sum(lst, n):
    f=[]
    for i in range(len(lst)-1):
        for x in range(1,len(lst)):
            f.append(lst[i]+lst[x])
    return any(i==n for i in f)

print(check_sum([10, 15, 3, 7], 17), True)
print(check_sum([4, 5, 6, 7, 8, 9], 13), True)
print(check_sum([2, 8, 9, 12, 45, 78], 1), False)
print(check_sum([10, 12, 4, 7, 9, 11], 16), True)
print(check_sum([0, 98, 76, 23], 174), True)
print(check_sum([0, 9, 7, 23, 19, 18, 17, 66], 39), False)

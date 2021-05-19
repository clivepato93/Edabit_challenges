# https://edabit.com/challenge/rk4nyFSXc6vcSWMWH

def shared_digits(lst):
    lst=[str(i) for i in lst]
    for i in range(0,len(lst)-1):
        if not any(v in lst[i+1] for v in lst[i]):
            return False
    return True


print(shared_digits([33, 53, 6351, 12, 2242, 44]), True)
print(shared_digits([1, 11, 12, 13, 14, 15, 16]), True)
print(shared_digits([33, 44, 55, 66, 77]), False)
print(shared_digits([1, 12, 123, 1234, 1235, 6789]), False)
print(shared_digits([5789, 798, 98, 995, 599, 699]), True)
print(shared_digits([5, 4, 44, 444]), False)
print(shared_digits([5, 65, 66, 76, 78]), True)
print(shared_digits([5, 55, 665, 66665555, 65, 66, 76, 78, 989]), True)
print(shared_digits([5, 55, 665, 4444, 65, 66, 76, 78, 989]), False)

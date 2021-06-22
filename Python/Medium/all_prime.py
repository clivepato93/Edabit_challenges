# https://edabit.com/challenge/6M4gYkxWTsE6Rxhge
def all_prime(lst):
    check=[]
    for num in lst:
        if num==1:
            check.append(False)
        if num==2:
            check.append(True)
        elif num%2:
            check.append(True)
        else:
            check.append(False)
    return all(check)

print(all_prime([7, 5, 2, 4, 6]), False)
print(all_prime([2, 3, 5, 7, 13, 17, 19, 23, 29]), True)
print(all_prime([1, 5, 3]), False)

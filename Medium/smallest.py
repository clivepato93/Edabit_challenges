# https://edabit.com/challenge/WBNgokx2TJTq2aD2N


def smallest(d, va):
    f=True
    v=int("1"+("0"*(d-1)))
    while f:
        if v%va==0:
            return v
        else:
            v+=1



print(smallest(3, 8), 104)
print(smallest(5, 12), 10008)
print(smallest(7, 1), 1000000)
print(smallest(2, 3), 12)
print(smallest(9, 33), 100000032)
print(smallest(8, 17), 10000012)
print(smallest(4, 67), 1005)
print(smallest(4, 432), 1296)
print(smallest(3, 432), 432)
print(smallest(3, 77), 154)

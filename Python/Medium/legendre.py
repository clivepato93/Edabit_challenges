# https://edabit.com/challenge/MxNcFpABB68JCxSwA
def legendre(p, n):
    i=1
    c=0
    while p**i<=n:
        c+=n//(p**i)
        i+=1
        # print(c)
    return c

print(legendre(5, 100), 24, "Example #1")
print(legendre(2, 128), 127, "Example #2")
print(legendre(3, 50), 22, "Example #3")
print(legendre(7, 98), 16)
print(legendre(11, 500), 49)
print(legendre(3, 600), 297)
print(legendre(7, 6), 0)
print(legendre(3, 1385), 688)
print(legendre(5, 4324), 1077)
print(legendre(2, 8663), 8655)

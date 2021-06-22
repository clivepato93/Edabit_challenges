from math import sqrt
def perfect_roots(n):
    s=[]
    for i in range(1,4):
        n=sqrt(n)
        s.append(n)
    return all(int(number)==number for number in s)

print(perfect_roots(256), True)
print(perfect_roots(1000), False)

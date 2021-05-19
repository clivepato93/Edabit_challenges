def gcd(n1, n2):
    max_n1=[i for i in range(1,n1+1) if n1%i==0]
    max_n2=[i for i in range(1,n2+1) if n2%i==0]
    return max([i for i in max_n2 if i in max_n1])

print(gcd(32, 8), 8)
print(gcd(8, 12), 4)
print(gcd(17, 13), 1)
print(gcd(14, 7), 7)
print(gcd(32, 16), 16)
print(gcd(17, 100), 1)
print(gcd(55, 20), 5)
print(gcd(55, 22), 11)

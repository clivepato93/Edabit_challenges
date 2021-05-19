def gcd(a, b):
    return [i for i in range(1,b+1) if not(a%i) and not(b%i)][-1]

print(gcd(6,10), 2)
print(gcd(17,85), 17)
print(gcd(18,153), 9)
print(gcd(14,14), 14)
print(gcd(6,31), 1)

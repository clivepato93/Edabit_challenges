def goldbach_conjecture(n):
    def is_prime(n):
        c=0
        if n==1:
            return False
        for i in range(1,n+1):
            if n%i==0:
                c+=1
            if c>2:
                return False
        return True
    f,t=2,n
    if n>2 and n%2==1:
        return []
    # i=n-1
    while (f+t)!=n:
        if is_prime(f)==True:
            f+=1
        elif is_prime(t)==False:
            t-=1

    return [f,t]


print(goldbach_conjecture(4), [2, 2])
print(goldbach_conjecture(8), [3, 5])
print(goldbach_conjecture(10), [3, 7])
print(goldbach_conjecture(24), [5, 19])
print(goldbach_conjecture(100), [3, 97])
print(goldbach_conjecture(1234), [3, 1231])
print(goldbach_conjecture(1400), [19, 1381])
print(goldbach_conjecture(1566), [7, 1559])
print(goldbach_conjecture(3444), [11, 3433])
# Mubashir

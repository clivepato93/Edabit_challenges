# https://edabit.com/challenge/SFAjxGWk9AbfwbXFN

def primes_below_num(n):
    a=[]
    for n in range(2,n+1):
        if len([i for i in range(1,n+1) if n%i==0])==2:
            a.append(n)
    return a

print(primes_below_num(5), [2, 3, 5])
print(primes_below_num(10), [2, 3, 5, 7])
print(primes_below_num(20), [2, 3, 5, 7, 11, 13, 17, 19])
print(primes_below_num(6), [2, 3, 5])
print(primes_below_num(11), [2, 3, 5, 7, 11])
print(primes_below_num(21), [2, 3, 5, 7, 11, 13, 17, 19])
print(primes_below_num(7), [2, 3, 5, 7])
print(primes_below_num(12), [2, 3, 5, 7, 11])
print(primes_below_num(22), [2, 3, 5, 7, 11, 13, 17, 19])
print(primes_below_num(8), [2, 3, 5, 7])
print(primes_below_num(13), [2, 3, 5, 7, 11, 13])
print(primes_below_num(23), [2, 3, 5, 7, 11, 13, 17, 19, 23])

# https://edabit.com/challenge/QCgDtyfajCT4PGhFK

def prime_factorization(n):
    lst=[]
    o=2
    while n!=1:
        if n%(o)==0:
            n/=(o)
            lst.append(o)
        else:
            o+=1
    return lst



print(prime_factorization(8), [2,2,2])
print(prime_factorization(99), [3,3,11])
print(prime_factorization(1), [])
print(prime_factorization(57), [3,19])
print(prime_factorization(100), [2,2,5,5])

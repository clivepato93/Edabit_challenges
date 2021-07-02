
# https://edabit.com/challenge/FbQqXepHC4wxrWgYg
def prime_divisors(num):
    def prime(x):
        if x<2:
            return False
        for n in range(2,int(x**0.5)+1):
            if x%n==0:
                return False
        else:
            return True
    return [i for i in range(2,num+1) if num%i==0 and prime(i)]

print(prime_divisors(27), [3])
print(prime_divisors(24), [2, 3])
print(prime_divisors(478170), [2, 3, 5, 7, 11, 23])
# print(prime_divisors(1386), [2, 3, 7, 11])
# print(prime_divisors(462), [2, 3, 7, 11])
# print(prime_divisors(99), [3, 11])

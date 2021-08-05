# https://edabit.com/challenge/6QYwhZstMuHYtZRbT

def is_prime(num):
    if num==1:
        return False
    for i in range(2, int(num**0.5)+1):
        if num % i == 0:
            return False
        
    return True

def prime_count(a, b):
    return sum(is_prime(num) for num in range(a,b+1))

print(prime_count(1, 10), 4)
print(prime_count(1, 100), 25)
print(prime_count(1, 1000), 168)
print(prime_count(1, 10000), 1229)
print(prime_count(1, 100000), 9592)
print(prime_count(2090, 2098), 0)
print(prime_count(548, 556), 0)
print(prime_count(3297, 4297), 128)